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

const LocationData = ({ data }) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {
        return (
            <div>
                <h2>Location Data</h2>
                <div id="map">
                    <MapContainer center={[data.atmTransactions[0].latitude, data.atmTransactions[0].longitude]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {data.atmTransactions.map((atm) => {
                            const atmLocation = [atm.latitude, atm.longitude];
                            const popupTimestamp = atm.timestamp;
                            const popupAmount = atm.amount;
                            const popupAddress = `${atm.street_name}, ${atm.postcode}`;
                            return (
                                <Marker position={atmLocation}>
                                    <Popup>
                                        ATM transaction<br></br>
                                        Amount: £{popupAmount}<br></br>
                                        Address: {popupAddress}<br></br>
                                        {popupTimestamp}
                                    </Popup>
                                </Marker>
                            )
                        })}
                        {data.anprSightings.map((anpr) => {
                            const anprLocation = [anpr.latitude, anpr.longitude];
                            const popupTimestamp = anpr.timestamp;
                            const popupCar = `${anpr.colour.replace(/^\w/, (c) => c.toUpperCase())} ${anpr.make} ${anpr.model}`;
                            const popupReg = anpr.vehicle_registration_no;
                            return (
                                <Marker position={anprLocation}>
                                    <Popup>
                                        ANPR sighting<br></br>
                                        Car: {popupCar}<br></br>
                                        Registration: {popupReg}<br></br>
                                        {popupTimestamp}
                                    </Popup>
                                </Marker>
                            )
                        })}
                        {data.eposTransactions.map((epos) => {
                            const eposLocation = [epos.latitude, epos.longitude];
                            const popupTimestamp = epos.timestamp;
                            const popupVendor = epos.vendor;
                            const popupAmount = epos.amount;
                            const popupAddress = `${epos.street_name}, ${epos.postcode}`;
                            return (
                                <Marker position={eposLocation}>
                                    <Popup>
                                        EPOS transaction<br></br>
                                        Vendor: {popupVendor}<br></br>
                                        Amount: £{popupAmount}<br></br>
                                        Address: {popupAddress}<br></br>
                                        {popupTimestamp}
                                    </Popup>
                                </Marker>
                            )
                        })}
                    </MapContainer>
                </div>
            </div>
        );
    }
}
export default LocationData;