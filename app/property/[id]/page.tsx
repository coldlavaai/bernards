'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { mockProperties } from '@/lib/mockProperties'
import { Bed, Bath, Maximize2, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { use } from 'react'

interface Props {
  params: Promise<{ id: string }>
}

export default function PropertyPage({ params }: Props) {
  const { id } = use(params)
  const property = mockProperties.find(p => p.id === parseInt(id))

  if (!property) return notFound()

  return <PropertyDetail property={property} />
}

function PropertyDetail({ property }: { property: ReturnType<typeof mockProperties.find> & object }) {
  const p = property as NonNullable<typeof property>
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = p.images && p.images.length > 0 ? p.images : [p.image]

  const prev = () => setPhotoIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setPhotoIndex(i => (i + 1) % images.length)

  return (
    <main style={{ background: '#f4f5f7', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '12px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#9ca3af', fontWeight: 500 }}>
          <Link href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/search" style={{ color: '#6b7280', textDecoration: 'none' }}>Properties</Link>
          <span>›</span>
          <span style={{ color: '#374151' }}>{p.address}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Left column */}
          <div style={{ flex: 1, minWidth: 300 }}>
            {/* Photo gallery */}
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', marginBottom: 8 }}>
              <img
                src={images[photoIndex]}
                alt={p.address}
                style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }}
              />
              {images.length > 1 && (
                <>
                  <button onClick={prev} style={navBtnStyle('left')}>
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={next} style={navBtnStyle('right')}>
                    <ChevronRight size={20} />
                  </button>
                  <div style={{
                    position: 'absolute',
                    bottom: 14,
                    right: 14,
                    background: 'rgba(0,0,0,0.55)',
                    color: '#fff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 4,
                  }}>
                    {photoIndex + 1} / {images.length}
                  </div>
                </>
              )}
              <div style={{
                position: 'absolute',
                top: 14,
                left: 14,
                background: p.type === 'For Sale' ? '#00DEB6' : '#5D3384',
                color: p.type === 'For Sale' ? '#0B2447' : '#fff',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 11,
                fontWeight: 700,
                padding: '5px 12px',
                borderRadius: 4,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}>
                {p.type}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
                {images.map((img, i) => (
                  <button key={i} onClick={() => setPhotoIndex(i)} style={{
                    width: 72,
                    height: 52,
                    border: i === photoIndex ? '3px solid #5D3384' : '3px solid transparent',
                    borderRadius: 6,
                    overflow: 'hidden',
                    padding: 0,
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </button>
                ))}
              </div>
            )}

            {/* Key info strip */}
            <div style={{
              background: '#0B2447',
              borderRadius: 10,
              padding: '20px 28px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 24,
            }}>
              {[
                { icon: <Bed size={18} />, label: 'Bedrooms', value: `${p.beds}` },
                { icon: <Bath size={18} />, label: 'Bathrooms', value: `${p.baths}` },
                { icon: <Maximize2 size={18} />, label: 'Floor Area', value: `${p.sqft} sqft` },
                { icon: <MapPin size={18} />, label: 'Type', value: p.propertyType },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ color: '#00DEB6' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: '#fff', fontWeight: 700 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ background: '#fff', borderRadius: 10, padding: '28px', marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, fontWeight: 800, color: '#0B2447', marginBottom: 16 }}>
                Property Description
              </h2>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#4b5563', lineHeight: 1.8, fontWeight: 500 }}>
                {p.description}
              </p>
            </div>

            {/* Features */}
            <div style={{ background: '#fff', borderRadius: 10, padding: '28px' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, fontWeight: 800, color: '#0B2447', marginBottom: 20 }}>
                Key Features
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                {p.features.map((f: string) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 22,
                      height: 22,
                      background: '#00DEB6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Check size={13} style={{ color: '#0B2447' }} />
                    </div>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#374151', fontWeight: 600 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — sticky agent card */}
          <div style={{ width: 320, flexShrink: 0 }}>
            <div style={{ position: 'sticky', top: 100 }}>
              {/* Price card */}
              <div style={{ background: '#fff', borderRadius: 10, padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', marginBottom: 16 }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 32, fontWeight: 800, color: '#0B2447', marginBottom: 4 }}>
                  {p.price}
                </div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#6b7280', fontWeight: 500, marginBottom: 20 }}>
                  {p.address}
                </div>

                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 20, marginBottom: 20 }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 700, color: '#0B2447', marginBottom: 4 }}>
                    Bernards Estate Agents
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>
                    Added {p.addedOn}
                  </div>
                </div>

                <a href="tel:02392008575" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  background: '#00DEB6',
                  color: '#0B2447',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontWeight: 800,
                  padding: '14px 0',
                  borderRadius: 8,
                  textDecoration: 'none',
                  marginBottom: 10,
                  width: '100%',
                  boxSizing: 'border-box',
                }}>
                  <Phone size={16} />
                  023 9200 8575
                </a>

                <Link href="/contact" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  background: '#5D3384',
                  color: '#fff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  padding: '14px 0',
                  borderRadius: 8,
                  textDecoration: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}>
                  <Mail size={16} />
                  Email Agent
                </Link>
              </div>

              {/* Book valuation prompt */}
              <div style={{
                background: 'linear-gradient(135deg, #0B2447, #1B2A4A)',
                borderRadius: 10,
                padding: '24px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 8 }}>
                  Thinking of Selling?
                </div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: 16 }}>
                  Get a free valuation from our local experts
                </div>
                <Link href="/valuations" style={{
                  display: 'block',
                  background: '#00DEB6',
                  color: '#0B2447',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 13,
                  fontWeight: 800,
                  padding: '12px 0',
                  borderRadius: 7,
                  textDecoration: 'none',
                }}>
                  Book Free Valuation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Similar properties */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 800, color: '#0B2447', marginBottom: 24 }}>
            Similar Properties
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {mockProperties
              .filter(q => q.id !== p.id && q.type === p.type)
              .slice(0, 3)
              .map(q => (
                <Link key={q.id} href={`/property/${q.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                    <img src={q.image} alt={q.address} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '16px' }}>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, fontWeight: 800, color: '#0B2447', marginBottom: 4 }}>{q.price}</div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6b7280', fontWeight: 500 }}>{q.address}</div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function navBtnStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 12,
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.45)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
  }
}
