import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0B2447', color: 'rgba(255,255,255,0.75)', fontFamily: 'Montserrat, sans-serif' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '48px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, paddingBottom: 48 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: 2, marginBottom: 16 }}>BERNARDS</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              Your trusted estate agent in Portsmouth, Southsea, Fareham, Gosport and surrounding areas since 1990.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Property</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '/search', label: 'Property Search' },
                { href: '/selling', label: 'Selling' },
                { href: '/landlords', label: 'Landlords' },
                { href: '/valuations', label: 'Valuations' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/sales', label: 'Sales' },
                { href: '/lettings', label: 'Lettings' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <Phone size={14} style={{ color: '#00DEB6', flexShrink: 0 }} />
                <a href="tel:02392008575" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>023 9200 8575</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <Mail size={14} style={{ color: '#00DEB6', flexShrink: 0 }} />
                <a href="mailto:southsea@bernardsea.co.uk" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>southsea@bernardsea.co.uk</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13 }}>
                <MapPin size={14} style={{ color: '#00DEB6', flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>119 Queen Street, The Hard,<br />Portsmouth PO1 3HY</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} Bernards Estate Agents. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
