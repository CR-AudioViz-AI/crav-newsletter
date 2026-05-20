// app/page.tsx — javari-newsletter
// Javari Newsletter — AI-powered email newsletter platform
// Manage subscribers, create AI-written campaigns, track performance
// CR AudioViz AI · EIN 39-3646201 · May 2026
'use client'
import { useState, useRef } from 'react'

function getFeatures() {
  return [
    { emoji: '✍️', title: 'AI-Written Content', desc: 'Generate full newsletters from a topic in seconds. Subject lines, body copy, CTAs — all written by Javari AI.' },
    { emoji: '📊', title: 'Real-Time Analytics', desc: 'Open rates, click-through rates, unsubscribes — live dashboards powered by your Supabase data.' },
    { emoji: '👥', title: 'Subscriber Management', desc: 'Import lists, segment by behavior, automate welcome sequences. Your list, your rules.' },
    { emoji: '🎨', title: 'Beautiful Templates', desc: '20+ responsive email templates. Customize colors, fonts, and layouts. Works in every inbox.' },
    { emoji: '⚡', title: 'Send at Scale', desc: 'Send to 1 or 100,000 subscribers. AWS SES integration for reliable, affordable delivery.' },
    { emoji: '🔄', title: 'Automation Flows', desc: 'Drip campaigns, re-engagement sequences, behavioral triggers. Set it and let it run.' },
  ]
}

export default function NewsletterPage() {
  const features = getFeatures()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const emailRef = useRef(null)

  async function handleSignup(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    window.location.href = 'https://craudiovizai.com/auth/signup?app=javari-newsletter&return_to=' + encodeURIComponent(window.location.href)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}>
      {/* NAV */}
      <nav style={{ position: 'sticky', top: 48, zIndex: 90, background: 'rgba(10,10,15,0.97)', borderBottom: '1px solid rgba(99,102,241,0.12)', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px' }}>
        <a href="https://craudiovizai.com" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{ fontSize: 22 }}>📧</span>
          <span style={{ fontWeight: 800, color: '#6366f1', fontSize: 15 }}>Javari Newsletter</span>
        </a>
        <a href="https://craudiovizai.com/auth/signup" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', borderRadius: 8, padding: '7px 18px', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Start Free →</a>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: '80px 24px 60px', maxWidth: 700, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderRadius: 20, padding: '4px 14px', fontSize: 12, fontWeight: 700, marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>AI-Powered Email Marketing</div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Newsletters that write <span style={{ color: '#6366f1' }}>themselves</span>
        </h1>
        <p style={{ fontSize: 18, color: '#9ca3af', lineHeight: 1.65, maxWidth: 520, margin: '0 auto 36px' }}>
          Tell Javari AI your topic. Get a full newsletter — subject line, body, CTAs. Send to your whole list in one click.
        </p>
        <form onSubmit={handleSignup} style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 440, margin: '0 auto' }}>
          <input ref={emailRef} type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{ flex: 1, minWidth: 220, padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.07)', color: '#e2e8f0', fontSize: 14, outline: 'none' }} />
          <button type="submit"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', border: 'none', borderRadius: 10, padding: '12px 22px', fontSize: 14, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
            Get Started Free
          </button>
        </form>
        <p style={{ marginTop: 14, fontSize: 12, color: '#374151' }}>50 sends free every month · No credit card required · Credits never expire</p>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: 960, margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: '#111118', border: '1px solid rgba(99,102,241,0.1)', borderRadius: 14, padding: '24px' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.emoji}</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#e2e8f0' }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '60px 24px 80px', borderTop: '1px solid rgba(99,102,241,0.08)' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 800, margin: '0 0 16px' }}>Start your newsletter today</h2>
        <p style={{ color: '#6b7280', fontSize: 15, marginBottom: 28 }}>50 free sends/month. AI-written content. Real analytics.</p>
        <a href="https://craudiovizai.com/auth/signup?app=javari-newsletter"
          style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', borderRadius: 10, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
          Create Free Account →
        </a>
      </section>

      <footer style={{ borderTop: '1px solid rgba(99,102,241,0.07)', padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ color: '#1f2937', fontSize: 11, margin: 0, fontFamily: 'system-ui' }}>
          © 2026 CR AudioViz AI, LLC — EIN: 39-3646201 · Fort Myers, Florida · Your Story. Our Design. ·{' '}
          <a href="https://craudiovizai.com" style={{ color: '#374151', textDecoration: 'none' }}>craudiovizai.com</a>
        </p>
      </footer>
    </div>
  )
}
