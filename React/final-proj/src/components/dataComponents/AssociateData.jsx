import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const AssociateData = ({ data }) => {
    // if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
    //     return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    // } else {
    return (
        <div>

            <div>
                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th colSpan={3}>Calls Made To Associates</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Associate Names</td>
                            <td>Associate Number</td>
                            <td>Timestamp</td>
                        </tr>
                        {data.callsMade.map((call) => {
                            return (
                                <tr>
                                    <td>
                                        {call.forenames} {call.surname}
                                    </td>
                                    <td>
                                        {call.receiver_msisdn}
                                    </td>
                                    <td>
                                        {call.timestamp}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>

            <div>
                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th colSpan={3}>Calls Received from Associates</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Associate Names</td>
                            <td>Associate Number</td>
                            <td>Timestamp</td>
                        </tr>
                        {data.callsReceived.map((call) => {
                            return (
                                <tr>
                                    <td>
                                        {call.forenames} {call.surname}
                                    </td>
                                    <td>
                                        {call.receiver_msisdn}
                                    </td>
                                    <td>
                                        {call.timestamp}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
// }

export default AssociateData;