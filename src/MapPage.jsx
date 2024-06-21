import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import Navigation from './Navigation';

const position = [-25.4249668,-49.2748809]

export default function Map() {
    return (
        <>
          <Navigation/>
          <h2 style={{marginBottom: "20px"}}>Senai Map</h2>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "80vw", height:"60vh", margin:"0 auto"}}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                Senai
                </Popup>
              </Marker>
          </MapContainer>
        </>
    )
}