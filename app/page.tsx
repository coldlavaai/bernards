'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Search, Bed, Bath, Ruler } from 'lucide-react'
import { mockProperties } from '@/lib/mockProperties'

const featured = mockProperties.slice(0, 4)

export default function HomePage() {
  const router = useRouter()
  const [tab, setTab] = useState<'buy' | 'rent' | 'sold'>('buy')
  const [location, setLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const type = tab === 'buy' ? 'For Sale' : tab === 'rent' ? 'To Rent' : 'Sold'
    router.push(`/search?type=${encodeURIComponent(type)}&location=${encodeURIComponent(location)}`)
  }

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 100px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="https://bernardsestateagents.live-website.com/wp-content/uploads/2026/02/portsmouth-aerial.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so text stays readable */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, rgba(11,36,71,0.82) 0%, rgba(27,42,74,0.78) 100%)',
          zIndex: 1,
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 12,
          }}>
            Find Your Perfect Property<br />in Portsmouth &amp; Hampshire
          </h1>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 16,
            color: 'rgba(255,255,255,0.75)',
            marginBottom: 40,
            fontWeight: 500,
          }}>
            Expert estate agents serving Portsmouth, Southsea, Fareham, Gosport and surrounding areas since 1990
          </p>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginBottom: 0 }}>
            {(['buy', 'rent', 'sold'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  padding: '12px 28px',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: t === 'buy' ? '8px 0 0 0' : t === 'sold' ? '0 8px 0 0' : '0',
                  background: tab === t ? '#fff' : 'rgba(255,255,255,0.12)',
                  color: tab === t ? '#0B2447' : 'rgba(255,255,255,0.85)',
                  transition: 'all 0.15s',
                  textTransform: 'capitalize',
                  letterSpacing: 0.5,
                }}
              >
                {t === 'buy' ? 'Buy' : t === 'rent' ? 'Rent' : 'Sold'}
              </button>
            ))}
          </div>

          {/* Search form */}
          <form onSubmit={handleSearch} style={{
            display: 'flex',
            background: '#fff',
            borderRadius: '0 8px 8px 8px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 16px' }}>
              <Search size={18} style={{ color: '#9ca3af', flexShrink: 0, marginRight: 10 }} />
              <input
                type="text"
                placeholder="Enter a location or postcode (e.g. Portsmouth, PO1)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#1f2937',
                  background: 'transparent',
                  padding: '18px 0',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: '#5D3384',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 14,
                fontWeight: 700,
                padding: '0 32px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexShrink: 0,
              }}
            >
              <Search size={16} />
              Search
            </button>
          </form>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: '#00DEB6', padding: '32px 24px' }}>
        <div style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 24,
          textAlign: 'center',
        }}>
          {[
            { value: '4,000+', label: 'Properties Sold' },
            { value: '£235m', label: 'Total Sales Value' },
            { value: '30+', label: 'Years Experience' },
            { value: '8', label: 'Local Offices' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 800, color: '#0B2447' }}>{s.value}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#0B2447', opacity: 0.8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECENT INSTRUCTIONS ── */}
      <section style={{ background: '#f4f5f7', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 28,
            fontWeight: 800,
            color: '#0B2447',
            marginBottom: 8,
            textAlign: 'center',
          }}>Recent Instructions</h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 14,
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: 40,
            fontWeight: 500,
          }}>
            Browse our latest properties across Portsmouth and Hampshire
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {featured.map((p) => (
              <Link key={p.id} href={`/property/${p.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <img
                      src={p.image}
                      alt={p.address}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: p.type === 'For Sale' ? '#00DEB6' : '#5D3384',
                      color: p.type === 'For Sale' ? '#0B2447' : '#fff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 4,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                    }}>
                      {p.type}
                    </div>
                  </div>

                  <div style={{ padding: '20px 20px 24px' }}>
                    <div style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 22,
                      fontWeight: 800,
                      color: '#0B2447',
                      marginBottom: 6,
                    }}>{p.price}</div>
                    <div style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: 14,
                      lineHeight: 1.4,
                    }}>{p.address}</div>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>
                        <Bed size={14} style={{ color: '#00DEB6' }} />
                        {p.beds} bed
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>
                        <Bath size={14} style={{ color: '#00DEB6' }} />
                        {p.baths} bath
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>
                        <Ruler size={14} style={{ color: '#00DEB6' }} />
                        {p.sqft} sqft
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/search" style={{
              display: 'inline-block',
              background: '#5D3384',
              color: '#fff',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              padding: '14px 36px',
              borderRadius: 8,
              textDecoration: 'none',
            }}>
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ── THINKING OF SELLING? CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0B2447 0%, #1B2A4A 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: 16,
            lineHeight: 1.2,
          }}>Thinking of Selling?</h2>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
            color: 'rgba(255,255,255,0.75)',
            marginBottom: 36,
            fontWeight: 500,
            lineHeight: 1.7,
          }}>
            Get a free, no-obligation valuation from our expert local team.
            We've been helping people move in Portsmouth and Hampshire for over 30 years.
          </p>
          <Link href="/valuations" style={{
            display: 'inline-block',
            background: '#00DEB6',
            color: '#0B2447',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
            fontWeight: 800,
            padding: '16px 44px',
            borderRadius: 8,
            textDecoration: 'none',
            letterSpacing: 0.5,
          }}>
            Book a Free Valuation
          </Link>
        </div>
      </section>

      {/* ── WHY BERNARDS ── */}
      <section style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 28,
            fontWeight: 800,
            color: '#0B2447',
            textAlign: 'center',
            marginBottom: 48,
          }}>Why Choose Bernards?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {[
              { icon: '🏡', title: 'Local Experts', desc: 'Over 30 years serving Portsmouth and Hampshire. We know every street, every postcode.' },
              { icon: '⭐', title: '5-Star Service', desc: 'Consistently rated 5 stars by our customers. Your satisfaction is our top priority.' },
              { icon: '📍', title: '8 Local Offices', desc: 'Branches across Portsmouth, Southsea, Fareham, Gosport, Waterlooville and more.' },
              { icon: '🔑', title: 'End-to-End Support', desc: 'From valuation to completion, we\'re with you every step of the way.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: '#f4f5f7',
                borderRadius: 12,
                padding: '32px 28px',
                borderTop: '4px solid #00DEB6',
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 800,
                  color: '#0B2447',
                  marginBottom: 10,
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 13,
                  color: '#6b7280',
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
