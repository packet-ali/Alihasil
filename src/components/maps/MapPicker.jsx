import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

import {
  useState,
} from "react";

function LocationMarker({
  position,
  setPosition,
}) {

  useMapEvents({
    click(e) {

      setPosition([
        e.latlng.lat,
        e.latlng.lng,
      ]);

    },
  });

  return position ? (
    <Marker position={position} />
  ) : null;
}

export default function MapPicker({
  position,
  setPosition,
}) {

  return (

    <div className="rounded-3xl overflow-hidden">

      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "300px",
          width: "100%",
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          position={position}
          setPosition={setPosition}
        />

      </MapContainer>

    </div>
  );
}