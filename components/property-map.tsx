'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import type { Property } from '@/lib/mockProperties'

// Fix leaflet default icons
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const purpleIcon = new L.DivIcon({
  html: `<div style="
    background:#5D3384;
    color:#fff;
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    width:28px;
    height:28px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid #fff;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);
  "><div style="transform:rotate(45deg);font-size:12px">£</div></div>`,
  className: '',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -32],
})

interface Props {
  properties: Property[]
}

export default function PropertyMap({ properties }: Props) {
  const center: [number, number] = properties.length > 0
    ? [properties[0].lat, properties[0].lng]
    : [50.7989, -1.0911]

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      />
      <MapContainer
        center={center}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />
        {properties.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={purpleIcon}>
            <Popup>
              <div style={{ fontFamily: 'Montserrat, sans-serif', minWidth: 180 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: '#0B2447', marginBottom: 4 }}>{p.price}</div>
                <div style={{ fontSize: 12, color: '#374151', marginBottom: 8 }}>{p.address}</div>
                <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 10 }}>
                  {p.beds} bed · {p.baths} bath · {p.propertyType}
                </div>
                <Link href={`/property/${p.id}`} style={{
                  display: 'block',
                  background: '#5D3384',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '7px 0',
                  borderRadius: 5,
                  textDecoration: 'none',
                  fontSize: 12,
                  fontWeight: 700,
                }}>
                  View Property
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
