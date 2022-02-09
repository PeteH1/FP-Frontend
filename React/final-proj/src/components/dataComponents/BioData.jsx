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
            <div> 
                <header>

                </header>

                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th colSpan={2}>Basic Information </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Citizen ID</td>
                                <td>{data.citizenPassport[0].citizen_id}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>{data.citizenPassport[0].date_of_birth}</td>
                            </tr>
                            <tr>
                                <td>Home Address</td>
                                <td>{data.citizenPassport[0].home_address}</td>
                            </tr>
                            <tr>
                                <td>Place of Birth</td>
                                <td>{data.citizenPassport[0].place_of_birth}</td>
                            </tr>
                            <tr>
                                <td>Sex</td>
                                <td>{data.citizenPassport[0].sex}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th colSpan={2}>Passport Info </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Passport Number</td>
                                <td>{data.citizenPassport[0].passport_number}</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>{data.citizenPassport[0].nationality}</td>
                            </tr>
                            <tr>
                                <td>Date of Issue</td>
                                <td>{data.citizenPassport[0].date_of_issue}</td>
                            </tr>
                            <tr>
                                <td>Date of Expiry</td>
                                <td>{data.citizenPassport[0].date_of_expiry}</td>
                            </tr>
                            <tr>
                                <td>Issuing Country</td>
                                <td>{data.citizenPassport[0].issuing_country}</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>









            {/* <h4>Basic Information</h4>
            <p>ID: {data.citizenPassport[0].citizen_id}</p>
            <p>Date of Birth: {data.citizenPassport[0].date_of_birth}</p>
            <p>Home Address: {data.citizenPassport[0].home_address}</p>
            <p>Place of Birth: {data.citizenPassport[0].place_of_birth}</p>
            <p>Sex: {data.citizenPassport[0].date_of_birth}</p>
            <p>Phone Number: {data.callsMade[0].caller_msisdn}</p>
            <h4>Passport Information</h4>
            <p>Passport Number: {data.citizenPassport[0].passport_number}</p>
            <p>Date of Expiry: {data.citizenPassport[0].date_of_expiry}</p>
            <p>Date of Issue: {data.citizenPassport[0].date_of_issue}</p>
            <p>Issuing Country: {data.citizenPassport[0].issuing_country}</p>
            <p>Nationality: {data.citizenPassport[0].nationality}</p> */}
        </div>
    );
}
// }

export default BioData;