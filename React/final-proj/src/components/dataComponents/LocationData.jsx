import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/App.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [51.505, -0.09];

// let atmLocation = ;

const LocationData = ({ data }) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {



        return (
            <div>
                <h2>Location Data</h2>
                <p>atm latitude: {data.atmTransactions[0].latitude}</p>
                <p>atm longitude: {data.atmTransactions[0].longitude}</p>
                <p>atm street name: {data.atmTransactions[0].street_name}</p>

                <p>epos latitude: {data.eposTransactions[0].latitude}</p>
                <p>epos longitude: {data.eposTransactions[0].longitude}</p>
                <p>epos vendor: {data.eposTransactions[0].vendor}</p>
                <p>epos timestamp: {data.eposTransactions[0].timestamp}</p>
                <div id="map">
                    <MapContainer center={[data.atmTransactions[0].latitude, data.atmTransactions[0].longitude]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {data.atmTransactions.map((atm) => {
                            const atmLocation = [atm.latitude, atm.longitude];
                            const text = atm.timestamp;
                            return (
                                <Marker position={atmLocation}>
                                    <Popup>
                                        {text}
                                    </Popup>
                                </Marker>
                            )
                        })}
                        {data.anprSightings.map((anpr) => {
                            const anprLocation = [anpr.latitude, anpr.longitude];
                            const text = anpr.timestamp;
                            return (
                                <Marker position={anprLocation}>
                                    <Popup>
                                        {text}
                                    </Popup>
                                </Marker>
                            )
                        })}

                        {/* <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker> */}
                    </MapContainer>
                </div>
            </div>
        );
    }
}
export default LocationData;