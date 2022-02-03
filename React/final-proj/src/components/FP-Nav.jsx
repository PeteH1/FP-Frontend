import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Catlogo from '../img/sqcropLogo.jpg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
const NavigationBar = () => {
    const [searchResult, setSearchResult] = useState("");
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Catlogo}
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Final Project
                    </Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Features</Nav.Link>
                        <Nav.Link href="/">Pricing</Nav.Link>
                    </Nav> */}
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="secondary">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
