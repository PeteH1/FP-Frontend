import React, { useState } from 'react';

const AssociateData = ({ data }) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {
        return (
            <div>
                <h4>Calls Made</h4>
                <p>First call timestamp: {data.callsReceived[0].timestamp}</p>
                {/* <p>name: {data.callsRevieved[0].timestamp} </p> */}
                {/* <p>ID: {data.citizenPassport[0].citizen_id}</p>
            <p>Date of Birth: {data.citizenPassport[0].date_of_birth}</p>
            <p>Home Address: {data.citizenPassport[0].home_address}</p>
            <p>Place of Birth: {data.citizenPassport[0].place_of_birth}</p>
            <p>Sex: {data.citizenPassport[0].date_of_birth}</p>
            <h3>Calls Received</h3>
            <p>Passport Number: {data.citizenPassport[0].passport_number}</p>
            <p>Date of Expiry: {data.citizenPassport[0].date_of_expiry}</p>
            <p>Date of Issue: {data.citizenPassport[0].date_of_issue}</p>
            <p>Issuing Country: {data.citizenPassport[0].issuing_country}</p>
            <p>Nationality: {data.citizenPassport[0].nationality}</p> */}
            </div>
        );
    }
}

export default AssociateData;