import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Catlogo from '../img/sqcropLogo.jpg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const NavigationBar = ({searchData}) => {
    let fullName;
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="/">
                    
                        <img
                            src={Catlogo}
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Final Project
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/tabs">Temp Tabs</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={() => {
                                

                            }}
                        />
                        <Button variant="secondary" onClick={() => {
                            
                        }}>Search</Button>
                    </Form>
                </Container>
            </Navbar>
            {/* <Home searchData = {searchResult}/> */}
             {/* We need to move state from Navbar to Home, then Home to Tabspace */}
            
        </div>
    );
}

export default NavigationBar;
