'use client'

import { type FormEvent, useEffect, useId, useRef, useState } from 'react'

// Matches the published Field Notes form used on jeremiahgardner.com.
const kitFormUrl = 'https://app.kit.com/forms/7437813/subscriptions'
const fieldNotesUrl = 'https://fieldnotes.jeremiahgardner.com/'
const retryMessage = 'We couldn’t complete your signup. Try again or use the Field Notes signup page below.'

type KitReply = {
  status?: string
  url?: string
  consent?: { enabled?: boolean; url?: string }
}

type SignupState =
  | { status: 'idle' | 'pending' | 'error' }
  | { status: 'success'; verificationUrl?: string }

function readKitReply(reply: KitReply): SignupState {
  if (reply.status !== 'success' && reply.status !== 'quarantined') throw new Error(retryMessage)

  if (reply.status === 'quarantined' || reply.consent?.enabled) {
    const verificationUrl = new URL((reply.status === 'quarantined' ? reply.url : reply.consent?.url) ?? '')
    if (verificationUrl.protocol !== 'https:' || verificationUrl.username || verificationUrl.password ||
        !['app.kit.com', 'app.convertkit.com'].includes(verificationUrl.hostname)) {
      throw new Error(retryMessage)
    }
    return { status: 'success', verificationUrl: verificationUrl.href }
  }
  return { status: 'success' }
}

export default function NewsletterSignup({ source }: { source: 'book-home' | 'book-order' | 'book-blog' }) {
  const emailId = useId()
  const headingId = useId()
  const errorId = useId()
  const inFlight = useRef(false)
  const [state, setState] = useState<SignupState>({ status: 'idle' })
  const confirmation = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status === 'success') confirmation.current?.focus()
  }, [state.status])

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inFlight.current) return

    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('website')) return

    data.delete('website')
    data.set('email_address', String(data.get('email_address')).trim())
    data.set('fields[signup_page]', window.location.pathname)
    data.set('token', '')
    data.set('referrer', document.referrer)
    data.set('host', window.location.href)
    data.set('ckjs_version', '6')

    inFlight.current = true
    setState({ status: 'pending' })
    try {
      const response = await fetch(kitFormUrl, {
        method: 'POST',
        headers: { Accept: 'application/json', 'X-CKJS-Version': '6' },
        body: data,
        signal: AbortSignal.timeout(15_000),
      })
      if (!response.ok) throw new Error(retryMessage)
      setState(readKitReply(await response.json()))
    } catch {
      setState({ status: 'error' })
    } finally {
      inFlight.current = false
    }
  }

  return (
    <section className="newsletter-section" id="field-notes" aria-labelledby={headingId}>
      <div>
        <p className="book-kicker">Field Notes</p>
        <h2 id={headingId}>A clearer way to see what’s next.</h2>
        <p>Practical notes from Jeremiah Gardner on leadership, decision-making, and navigating uncertainty.</p>
      </div>
      <div className="newsletter-capture">
        <div ref={confirmation} tabIndex={-1} role="status" aria-live="polite">
          {state.status === 'success' && (
            <p className="signup-confirmation">
              {state.verificationUrl
                ? <>One more step. <a href={state.verificationUrl}>Complete your signup verification</a>.</>
                : 'Thanks for signing up. Check your inbox to confirm your subscription.'}
            </p>
          )}
        </div>
        {state.status !== 'success' && (
          <form action={kitFormUrl} method="post" onSubmit={subscribe} aria-busy={state.status === 'pending'}>
            <label htmlFor={emailId}>Email address</label>
            <div className="newsletter-fields">
              <input
                id={emailId}
                type="email"
                name="email_address"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
                readOnly={state.status === 'pending'}
                aria-describedby={state.status === 'error' ? errorId : undefined}
              />
              <button className="book-button book-button-primary" type="submit" disabled={state.status === 'pending'}>
                {state.status === 'pending' ? 'Subscribing…' : 'Join Field Notes'}
              </button>
            </div>
            <input type="hidden" name="fields[signup_source]" value={`leanbrandbook.com:${source}`} />
            <div hidden><label>Leave this empty <input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            {state.status === 'error' && <p id={errorId} role="alert">{retryMessage}</p>}
            <p className="signup-note">Unsubscribe anytime. <a href="https://jeremiahgardner.com/privacy">Privacy</a> · <a href={fieldNotesUrl}>Field Notes signup page</a></p>
          </form>
        )}
      </div>
    </section>
  )
}
