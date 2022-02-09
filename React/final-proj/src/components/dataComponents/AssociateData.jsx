import React, { useState } from 'react';

const AssociateData = ({ data }) => {
    // if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
    //     return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    // } else {
        return (
            <div>
                <h4>Calls Made to Associates</h4>
                {data.callsMade.map((call) => {
                    return (
                        <div>
                        <p>Associate Name: {call.forenames}{call.surnames}</p>
                        <p>Associate Number: {call.receiver_msisdn}</p>
                        <p>Timestamp: {call.timestamp}</p>
                        <p>-----------------------------------</p>
                        </div>
                    )
                }
                )}
                <h4>Calls Received from Associates</h4>
                {data.callsReceived.map((call) => {
                    return (
                        <div>
                        <p>Associate Name: {call.forenames}{call.surnames}</p>
                        <p>Associate Number: {call.receiver_msisdn}</p>
                        <p>Timestamp: {call.timestamp}</p>
                        <p>-----------------------------------</p>
                        </div>
                    )
                }
                )}
            </div>
        );
    }
// }

export default AssociateData;