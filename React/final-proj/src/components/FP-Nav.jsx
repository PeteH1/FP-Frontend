import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Catlogo from '../img/sqcropLogo.jpg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const NavigationBar = ({ setSearch }) => {

    let tempSearch;

    return (
        <div>
            <Navbar bg="darkNav" variant="dark">
                <Container>

                    <Navbar.Brand href="/">

                        <img
                            src={Catlogo}
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Suspect search
                    </Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="/tabs">Temp Tabs</Nav.Link>
                    </Nav> */}
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Full Name"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => {
                                tempSearch = e.target.value;

                            }}
                        />
                        <Link to="/SearchResults"> {/*This will need to link to the search results page*/}
                            <Button variant="secondary" onClick={() => {
                                if (tempSearch == "" || tempSearch.length <= 8 || !tempSearch.includes(" ")) {
                                    alert("enter a first name and last name")
                                } else {
                                    setSearch(tempSearch);
                                    console.log("temp", tempSearch);
                                }
                            }}>Search</Button>
                        </Link>
                    </Form>
                </Container>
            </Navbar>
            {/* <Home searchData = {searchResult}/> */}
            {/* We need to move state from Navbar to Home, then Home to Tabspace */}

        </div>
    );
}

export default NavigationBar;
