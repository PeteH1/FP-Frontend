import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const AssociateData = ({ data }) => {
    // if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
    //     return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    // } else {
    return (
        <div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <table class="table">


                        <div>
                            <Table striped bordered hover>
                                <thead>

                                    <tr>
                                        <th colSpan={3}>Calls Made To Associates</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="col-md-4">Associate Names</td>
                                        <td class="col-md-4">Associate Number</td>
                                        <td class="col-md-4">Timestamp</td>
                                    </tr>
                                    {data.callsMade.map((call) => {
                                        return (
                                            <tr>
                                                <td class="col-md-4">
                                                    {call.forenames} {call.surname}
                                                </td >
                                                <td class="col-md-4">
                                                    {call.receiver_msisdn}
                                                </td>
                                                <td class="col-md-4">
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
                                        <td class="col-md-4">Associate Names</td>
                                        <td class="col-md-4">Associate Number</td>
                                        <td class="col-md-4">Timestamp</td>
                                    </tr>
                                    {data.callsReceived.map((call) => {
                                        return (
                                            <tr>
                                                <td class="col-md-4">
                                                    {call.forenames} {call.surname}
                                                </td>
                                                <td class="col-md-4">
                                                    {call.caller_msisdn}
                                                </td>
                                                <td class="col-md-4">
                                                    {call.timestamp}
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )}
                                </tbody>
                            </Table>
                        </div>



                    </table>
                </div>
            </div >
        </div >

    );
}


export default AssociateData;