import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';



const BioData = ({ data }) => {
    // console.log(data);
    // if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
    //     return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    // } else {
    return (
        <div>
            {/* className={styles.biodata} */}
            {/* <div>
                <header>
                </header> */}
                <div id="myTable">
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <table class="table">

                                <div id="table1">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Basic Information </th>

                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr>
                                                <td class="col-md-4">Citizen ID</td>
                                                <td class="col-md-4">{data.citizenPassport[0].citizen_id}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Date of Birth</td>
                                                <td class="col-md-4">{data.citizenPassport[0].date_of_birth}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Home Address</td>
                                                <td class="col-md-4">{data.citizenPassport[0].home_address}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Place of Birth</td>
                                                <td class="col-md-4">{data.citizenPassport[0].place_of_birth}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Sex</td>
                                                <td class="col-md-4">{data.citizenPassport[0].sex}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                

                                <div id="table2">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr class="text center">
                                                <th colSpan={2}>Passport Info </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="col-md-4">Passport Number</td>
                                                <td class="col-md-4">{data.citizenPassport[0].passport_number}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Nationality</td>
                                                <td class="col-md-4">{data.citizenPassport[0].nationality}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Date of Issue</td>
                                                <td class="col-md-4">{data.citizenPassport[0].date_of_issue}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Date of Expiry</td>
                                                <td class="col-md-4">{data.citizenPassport[0].date_of_expiry}</td>
                                            </tr>
                                            <tr>
                                                <td class="col-md-4">Issuing Country</td>
                                                <td class="col-md-4">{data.citizenPassport[0].issuing_country}</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>

                            </table>
                        </div>
                    </div>
                </div>
            {/* </div> */}


        </div>
    );
}
// }

export default BioData;