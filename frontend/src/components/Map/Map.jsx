import React from 'react'
import './Map.css'
import {MapContainer , TileLayer} from "react-leaflet"


function Map() {
  return (
    <>
      <MapContainer
        center = {[12.9700,77.5946]}
        zoom = {13}
        style= {{height : "98vh" , width : "100%"}}
      >
        <TileLayer
          url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  )
}

export default Map