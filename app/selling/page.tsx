import Link from 'next/link'
import { Check } from 'lucide-react'

const steps = [
  { num: '01', title: 'Free Valuation', desc: 'Our local experts will visit your property and give you an honest, accurate valuation at no cost.' },
  { num: '02', title: 'Marketing Your Home', desc: 'Professional photography, video tours, Rightmove, Zoopla, PrimeLocation listings and high-street window displays.' },
  { num: '03', title: 'Viewings & Offers', desc: 'We manage all viewings and negotiate on your behalf to get you the best possible price.' },
  { num: '04', title: 'Sale to Completion', desc: 'We guide you through every step from accepted offer to keys handed over — keeping you informed throughout.' },
]

const included = [
  'Professional photography',
  'Video tour',
  'Rightmove & Zoopla listing',
  'High-street window display',
  'Bespoke property brochure',
  'Dedicated sales negotiator',
  'Regular progress updates',
  'No sale, no fee',
]

export default function SellingPage() {
  return (
    <main style={{ background: '#f4f5f7', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0B2447 0%, #1B2A4A 100%)',
        padding: '72px 24px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
          Selling Your Property
        </h1>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.75)', fontWeight: 500, maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.7 }}>
          Expert guidance from valuation to completion. We maximise exposure and get you the best price for your home.
        </p>
        <Link href="/valuations" style={{ display: 'inline-block', background: '#00DEB6', color: '#0B2447', fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 800, padding: '15px 40px', borderRadius: 8, textDecoration: 'none' }}>
          Book a Free Valuation
        </Link>
      </section>

      {/* How it works */}
      <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 800, color: '#0B2447', textAlign: 'center', marginBottom: 48 }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
          {steps.map(s => (
            <div key={s.num} style={{ background: '#fff', borderRadius: 12, padding: '32px 24px', boxShadow: '0 2px 10px rgba(0,0,0,0.07)' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 36, fontWeight: 800, color: '#00DEB6', marginBottom: 12 }}>{s.num}</div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, fontWeight: 800, color: '#0B2447', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#6b7280', lineHeight: 1.7, fontWeight: 500 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: '#0B2447', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 40 }}>
            What's Included
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {included.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 24, height: 24, background: '#00DEB6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={14} style={{ color: '#0B2447' }} />
                </div>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#fff', fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video tours section */}
      <section style={{ padding: '64px 24px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 26, fontWeight: 800, color: '#0B2447', textAlign: 'center', marginBottom: 12 }}>
          Examples of our Video Tours
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: '#6b7280', textAlign: 'center', fontWeight: 500, lineHeight: 1.7, marginBottom: 36 }}>
          Showcase your home with a high-quality video tour, giving buyers the chance to experience your property from the comfort of their own home. This helps attract genuinely interested buyers and makes the whole process more efficient.
        </p>
        <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', aspectRatio: '16/9', background: '#000' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0"
            title="Bernards Estate Agents Video Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0B2447, #1B2A4A)', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
          Ready to Sell?
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
          Get your free, no-obligation valuation today and find out what your home is really worth.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/valuations" style={{ display: 'inline-block', background: '#00DEB6', color: '#0B2447', fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 800, padding: '14px 36px', borderRadius: 8, textDecoration: 'none' }}>
            Book Free Valuation
          </Link>
          <Link href="/contact" style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 700, padding: '14px 36px', borderRadius: 8, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
