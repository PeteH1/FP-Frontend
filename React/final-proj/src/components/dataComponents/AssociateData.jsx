import React, { useState } from 'react';

const AssociateData = ({ data }) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {
        return (
            <div>
                <h4>Calls Made to Associates</h4>
                <p>Timestamp: {data.callsMade[0].timestamp}</p>
                <p>Associate Name: {data.callsMade[0].forenames} {data.callsReceived[0].surnames}</p>
                <p>Associate Number: {data.callsMade[0].receiver_msisdn}</p>
                <h4>Calls Received from Associates</h4>
                <p>Timestamp: {data.callsReceived[0].timestamp}</p>
                <p>Associate Name: {data.callsReceived[0].forenames} {data.callsReceived[0].surnames}</p>
                <p>Associate Number: {data.callsReceived[0].receiver_msisdn}</p>
            </div>
        );
    }
}

export default AssociateData;