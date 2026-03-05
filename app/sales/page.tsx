import Link from 'next/link'

export default function Page() {
  return (
    <main style={{ background: '#f4f5f7', minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(135deg, #0B2447 0%, #1B2A4A 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>📈</div>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Property Sales</h1>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.75)', fontWeight: 500, maxWidth: 560, margin: '0 auto 36px' }}>Whether you're buying or selling, our experienced sales team is here to guide you through every step.</p>
        <Link href='/search' style={{ display: 'inline-block', background: '#00DEB6', color: '#0B2447', fontFamily: 'Montserrat, sans-serif', fontSize: 15, fontWeight: 800, padding: '15px 40px', borderRadius: 8, textDecoration: 'none' }}>View Properties</Link>
      </section>
      <section style={{ padding: '64px 24px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 15, color: '#6b7280', fontWeight: 500, lineHeight: 1.8 }}>
          Full content coming soon. In the meantime, contact our team on <a href='tel:02392008575' style={{ color: '#5D3384', fontWeight: 700 }}>023 9200 8575</a> or visit our <Link href='/contact' style={{ color: '#5D3384', fontWeight: 700 }}>contact page</Link> to speak with one of our experts.
        </p>
      </section>
    </main>
  )
}
