'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const purplePin = new L.DivIcon({
  html: `<div style="
    background:#5D3384;
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    width:30px;height:30px;
    border:3px solid #fff;
    box-shadow:0 2px 10px rgba(0,0,0,0.3);
  "></div>`,
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -34],
})

interface Office {
  name: string
  lat: number
  lng: number
  phone: string
  email: string
  address: string
}

export default function OfficeMap({ offices }: { offices: Office[] }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
      <MapContainer
        center={[50.83, -1.08]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />
        {offices.map((o) => (
          <Marker key={o.name} position={[o.lat, o.lng]} icon={purplePin}>
            <Popup>
              <div style={{ fontFamily: 'Montserrat, sans-serif', minWidth: 180 }}>
                <div style={{ fontWeight: 800, fontSize: 13, color: '#0B2447', marginBottom: 6 }}>{o.name}</div>
                <div style={{ fontSize: 12, color: '#4b5563', marginBottom: 4 }}>{o.address}</div>
                <a href={`tel:${o.phone.replace(/\s/g, '')}`} style={{ fontSize: 12, color: '#5D3384', fontWeight: 700, textDecoration: 'none' }}>
                  {o.phone}
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
