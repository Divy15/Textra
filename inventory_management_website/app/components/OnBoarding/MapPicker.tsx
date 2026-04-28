"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for Leaflet default icon issues in Next.js
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapPickerProps {
  onLocationSelect: (lat: number, lng: number) => void;
  defaultPos?: { lat: number; lng: number };
}

function ChangeView({ center }: { center: { lat: number; lng: number } }) {
  const map = useMapEvents({});
  useEffect(() => {
    if (center && map) {
      // Check if map is still in the DOM to avoid '_leaflet_pos' error
      const container = map.getContainer();
      if (container) {
        map.flyTo([center.lat, center.lng], 16, { animate: true });
      }
    }
  }, [center.lat, center.lng, map]);
  return null;
}

export default function MapPicker({
  onLocationSelect,
  defaultPos,
}: MapPickerProps) {
  const [position, setPosition] = useState(
    defaultPos || { lat: 23.0225, lng: 72.5714 },
  );

  useEffect(() => {
    if (defaultPos) {
      setPosition(defaultPos);
    }
  }, [defaultPos?.lat, defaultPos?.lng]);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        onLocationSelect(e.latlng.lat, e.latlng.lng);
      },
    });

    return (
      <Marker
        position={position}
        icon={customIcon}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const marker = e.target;
            const newPos = marker.getLatLng();
            setPosition(newPos);
            onLocationSelect(newPos.lat, newPos.lng);
          },
        }}
      />
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border-2 border-gray-100 shadow-sm">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[250px] w-full z-0"
      >
        <ChangeView center={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
