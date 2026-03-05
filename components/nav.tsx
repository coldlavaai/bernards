'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/search', label: 'Property Search' },
  { href: '/selling', label: 'Selling' },
  { href: '/landlords', label: 'Landlords' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 22, fontWeight: 800, color: '#5D3384', letterSpacing: 2 }}>
              BERNARDS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: pathname === l.href ? '#5D3384' : '#1f2937',
                textDecoration: 'none',
              }}>
                {l.label}
              </Link>
            ))}
            <Link href="/valuations" style={{
              background: '#00DEB6',
              color: '#0B2447',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 13,
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: 8,
              textDecoration: 'none',
            }}>
              Book Valuation
            </Link>
          </nav>

          {/* Mobile burger */}
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ borderTop: '1px solid #e5e7eb', paddingBottom: 16 }} className="md:hidden">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                color: '#1f2937',
                textDecoration: 'none',
                borderBottom: '1px solid #f4f5f7',
              }}>
                {l.label}
              </Link>
            ))}
            <Link href="/valuations" onClick={() => setOpen(false)} style={{
              display: 'inline-block',
              marginTop: 12,
              background: '#00DEB6',
              color: '#0B2447',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
            }}>
              Book Valuation
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
