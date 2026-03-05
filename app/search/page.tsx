'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, Heart, Bed, Bath, Maximize2 } from 'lucide-react'
import { mockProperties } from '@/lib/mockProperties'
import dynamic from 'next/dynamic'

const PropertyMap = dynamic(() => import('@/components/property-map'), { ssr: false })

function SearchContent() {
  const searchParams = useSearchParams()
  const initialLocation = searchParams.get('location') || ''
  const initialType = searchParams.get('type') || ''

  const [searchLocation, setSearchLocation] = useState(initialLocation)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minBeds, setMinBeds] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [savedProperties, setSavedProperties] = useState<number[]>([])
  const [listingType, setListingType] = useState<'For Sale' | 'To Rent'>(
    initialType === 'To Rent' ? 'To Rent' : 'For Sale'
  )

  const filteredProperties = useMemo(() => {
    let filtered = mockProperties.filter(p => {
      if (p.type !== listingType) return false
      if (minPrice && p.priceValue < parseInt(minPrice)) return false
      if (maxPrice && p.priceValue > parseInt(maxPrice)) return false
      if (minBeds && p.beds < parseInt(minBeds)) return false
      if (propertyType && p.propertyType !== propertyType) return false
      return true
    })

    if (sortBy === 'price-low') return [...filtered].sort((a, b) => a.priceValue - b.priceValue)
    if (sortBy === 'price-high') return [...filtered].sort((a, b) => b.priceValue - a.priceValue)
    return filtered
  }, [minPrice, maxPrice, minBeds, propertyType, sortBy, listingType])

  const toggleSaved = (id: number) => {
    setSavedProperties(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id])
  }

  const selectStyle: React.CSSProperties = {
    height: 42,
    padding: '0 12px',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 6,
    fontSize: 13,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f4f5f7' }}>
      {/* Dark Filter Bar */}
      <div style={{ background: '#2B2B2B', padding: '16px 24px', position: 'sticky', top: 72, zIndex: 40 }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          {/* Buy / Rent tabs */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 14 }}>
            {(['For Sale', 'To Rent'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setListingType(t)}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '8px 20px',
                  border: 'none',
                  cursor: 'pointer',
                  background: listingType === t ? '#00DEB6' : 'rgba(255,255,255,0.1)',
                  color: listingType === t ? '#0B2447' : 'rgba(255,255,255,0.7)',
                  borderRadius: t === 'For Sale' ? '6px 0 0 6px' : '0 6px 6px 0',
                  transition: 'all 0.15s',
                  letterSpacing: 0.3,
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Filters row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            {/* Location search */}
            <div style={{ flex: '1 1 260px', display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.2)', padding: '0 12px', height: 42 }}>
              <Search size={16} style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0, marginRight: 8 }} />
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Location or postcode"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#fff',
                }}
              />
            </div>

            <select style={selectStyle} value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
              <option value="" style={{ background: '#2B2B2B' }}>Min Price</option>
              <option value="100000" style={{ background: '#2B2B2B' }}>£100,000</option>
              <option value="200000" style={{ background: '#2B2B2B' }}>£200,000</option>
              <option value="300000" style={{ background: '#2B2B2B' }}>£300,000</option>
              <option value="400000" style={{ background: '#2B2B2B' }}>£400,000</option>
              <option value="500000" style={{ background: '#2B2B2B' }}>£500,000</option>
              <option value="600000" style={{ background: '#2B2B2B' }}>£600,000</option>
            </select>

            <select style={selectStyle} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
              <option value="" style={{ background: '#2B2B2B' }}>Max Price</option>
              <option value="300000" style={{ background: '#2B2B2B' }}>£300,000</option>
              <option value="400000" style={{ background: '#2B2B2B' }}>£400,000</option>
              <option value="500000" style={{ background: '#2B2B2B' }}>£500,000</option>
              <option value="600000" style={{ background: '#2B2B2B' }}>£600,000</option>
              <option value="750000" style={{ background: '#2B2B2B' }}>£750,000</option>
              <option value="1000000" style={{ background: '#2B2B2B' }}>£1,000,000</option>
            </select>

            <select style={selectStyle} value={minBeds} onChange={(e) => setMinBeds(e.target.value)}>
              <option value="" style={{ background: '#2B2B2B' }}>Beds</option>
              <option value="1" style={{ background: '#2B2B2B' }}>1+</option>
              <option value="2" style={{ background: '#2B2B2B' }}>2+</option>
              <option value="3" style={{ background: '#2B2B2B' }}>3+</option>
              <option value="4" style={{ background: '#2B2B2B' }}>4+</option>
              <option value="5" style={{ background: '#2B2B2B' }}>5+</option>
            </select>

            <select style={selectStyle} value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="" style={{ background: '#2B2B2B' }}>Property Type</option>
              <option value="Detached" style={{ background: '#2B2B2B' }}>Detached</option>
              <option value="Semi-Detached" style={{ background: '#2B2B2B' }}>Semi-Detached</option>
              <option value="Terraced" style={{ background: '#2B2B2B' }}>Terraced</option>
              <option value="Flat" style={{ background: '#2B2B2B' }}>Flat</option>
              <option value="Bungalow" style={{ background: '#2B2B2B' }}>Bungalow</option>
            </select>

            <button
              style={{
                background: '#5D3384',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 13,
                fontWeight: 700,
                padding: '0 24px',
                height: 42,
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Search size={15} />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1600, margin: '0 auto', display: 'flex', minHeight: 'calc(100vh - 180px)' }}>
        {/* Left: Listings */}
        <div style={{ flex: 1, padding: '24px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <h1 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 18,
              fontWeight: 700,
              color: '#0B2447',
            }}>
              {filteredProperties.length} properties {listingType === 'For Sale' ? 'for sale' : 'to rent'}
              {searchLocation ? ` in ${searchLocation}` : ''}
            </h1>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                height: 38,
                padding: '0 10px',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
                fontSize: 13,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                background: '#fff',
                color: '#374151',
                cursor: 'pointer',
              }}
            >
              <option value="newest">Newest listed</option>
              <option value="price-low">Price (low to high)</option>
              <option value="price-high">Price (high to low)</option>
            </select>
          </div>

          {/* Property cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filteredProperties.map((p) => (
              <div key={p.id} style={{
                background: '#fff',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                display: 'flex',
                flexDirection: 'row',
              }}>
                {/* Image */}
                <div style={{ position: 'relative', width: 280, flexShrink: 0 }}>
                  <img
                    src={p.image}
                    alt={p.address}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    background: p.type === 'For Sale' ? '#00DEB6' : '#5D3384',
                    color: p.type === 'For Sale' ? '#0B2447' : '#fff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: 3,
                    textTransform: 'uppercase',
                  }}>
                    {p.type}
                  </div>
                  <button
                    onClick={() => toggleSaved(p.id)}
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      width: 32,
                      height: 32,
                      background: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    }}
                  >
                    <Heart
                      size={15}
                      style={{
                        fill: savedProperties.includes(p.id) ? '#ef4444' : 'none',
                        color: savedProperties.includes(p.id) ? '#ef4444' : '#6b7280',
                      }}
                    />
                  </button>
                </div>

                {/* Content */}
                <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 24, fontWeight: 800, color: '#0B2447', marginBottom: 4 }}>
                      {p.price}
                    </div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 10 }}>
                      {p.address}
                    </div>
                    <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>
                        <Bed size={14} style={{ color: '#00DEB6' }} />{p.beds} bed
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>
                        <Bath size={14} style={{ color: '#00DEB6' }} />{p.baths} bath
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#6b7280', fontWeight: 600 }}>
                        <Maximize2 size={14} style={{ color: '#00DEB6' }} />{p.sqft} sqft
                      </div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#9ca3af', fontWeight: 600 }}>
                        {p.propertyType}
                      </div>
                    </div>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#6b7280', lineHeight: 1.6, fontWeight: 500, marginBottom: 16 }}>
                      {p.description.substring(0, 140)}...
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #f0f0f0' }}>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>
                      Added {p.addedOn}
                    </div>
                    <Link href={`/property/${p.id}`} style={{
                      background: '#5D3384',
                      color: '#fff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      fontWeight: 700,
                      padding: '8px 20px',
                      borderRadius: 6,
                      textDecoration: 'none',
                    }}>
                      View Property
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filteredProperties.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 0', color: '#9ca3af', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🏡</div>
                <div style={{ fontSize: 18, color: '#374151', marginBottom: 8 }}>No properties found</div>
                <div style={{ fontSize: 13 }}>Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Map */}
        <div style={{ width: 520, flexShrink: 0, position: 'sticky', top: 145, height: 'calc(100vh - 145px)', display: 'none' }} className="map-sidebar">
          <PropertyMap properties={filteredProperties} />
        </div>
      </div>

      <style>{`
        @media (min-width: 1100px) {
          .map-sidebar { display: block !important; }
        }
      `}</style>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }}>
        Loading properties...
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
