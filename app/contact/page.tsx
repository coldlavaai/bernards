'use client'

import dynamic from 'next/dynamic'
import { Phone, Mail, MapPin } from 'lucide-react'

const OfficeMap = dynamic(() => import('@/components/office-map'), { ssr: false })

const offices = [
  { name: 'Bernards Admiralty Quarter', lat: 50.7967, lng: -1.1081, phone: '023 9200 8575', email: 'southsea@bernardsea.co.uk', address: '119 Queen Street, The Hard, Portsmouth PO1 3HY' },
  { name: 'Bernards Southsea', lat: 50.7814, lng: -1.0870, phone: '023 9286 4974', email: 'southsea@bernardsea.co.uk', address: '8 Clarendon Road, Southsea PO5 2EE' },
  { name: 'Bernards Drayton', lat: 50.8588, lng: -1.0640, phone: '02392 728091', email: 'drayton@bernardsea.co.uk', address: 'Lower Drayton Ln, Drayton, Portsmouth PO6 2HA' },
  { name: 'Bernards Fareham', lat: 50.8515, lng: -1.1785, phone: '01329 756500', email: 'fareham@bernardsea.co.uk', address: '79 High St, Fareham PO16 7AX' },
  { name: 'Bernards Waterlooville', lat: 50.8808, lng: -1.0304, phone: '023 9223 2888', email: 'waterlooville@bernardsea.co.uk', address: '47 London Road, Waterlooville PO7 7EX' },
  { name: 'Bernards Gosport', lat: 50.7939, lng: -1.1240, phone: '02392 004660', email: 'gosport@bernardsea.co.uk', address: '97 High St, Gosport PO12 1DS' },
  { name: 'Bernards Lee-On-The-Solent', lat: 50.8013, lng: -1.2024, phone: '02392 553636', email: 'leeonsolent@bernardsea.co.uk', address: '118-120 High St, Lee-on-the-Solent PO13 9DB' },
  { name: 'Bernards Havant', lat: 50.8529, lng: -0.9836, phone: '02392 482 147', email: 'havant@bernardsea.co.uk', address: '1 North Street Arcade, Havant PO9 1PX' },
]

export default function ContactPage() {
  return (
    <main style={{ background: '#f4f5f7', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0B2447 0%, #1B2A4A 100%)',
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 'clamp(24px, 4vw, 42px)',
          fontWeight: 800,
          color: '#fff',
          marginBottom: 12,
        }}>Our Offices</h1>
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 15,
          color: 'rgba(255,255,255,0.75)',
          fontWeight: 500,
        }}>
          8 branches across Portsmouth, Hampshire and the surrounding area
        </p>
      </section>

      {/* Map */}
      <div style={{ height: 480 }}>
        <OfficeMap offices={offices} />
      </div>

      {/* Office cards */}
      <section style={{ padding: '48px 24px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {offices.map((office) => (
              <div key={office.name} style={{
                background: '#fff',
                borderRadius: 10,
                padding: '24px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                borderTop: '4px solid #5D3384',
              }}>
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 15,
                  fontWeight: 800,
                  color: '#0B2447',
                  marginBottom: 16,
                }}>{office.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <MapPin size={15} style={{ color: '#5D3384', flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#4b5563', fontWeight: 500, lineHeight: 1.5 }}>
                      {office.address}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Phone size={15} style={{ color: '#5D3384', flexShrink: 0 }} />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 13,
                      color: '#0B2447',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}>
                      {office.phone}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Mail size={15} style={{ color: '#5D3384', flexShrink: 0 }} />
                    <a href={`mailto:${office.email}`} style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      color: '#5D3384',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}>
                      {office.email}
                    </a>
                  </div>
                </div>

                <a href={`tel:${office.phone.replace(/\s/g, '')}`} style={{
                  display: 'block',
                  marginTop: 20,
                  background: '#00DEB6',
                  color: '#0B2447',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 13,
                  fontWeight: 800,
                  padding: '10px 0',
                  borderRadius: 6,
                  textDecoration: 'none',
                  textAlign: 'center',
                }}>
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
