import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Redshiftlogo from '../img/RedshiftLogo.png';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = ({ setSearch }) => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    // const getByFullName = (fullName) => {
    //     //Axios
    //     //Renders collapsed cards of suspects with associated name.
    //     axios.get(`/get/${fullName}`)
    //     .then((res) => {
    //         console.log(res);
    //         searchData(res.data);

    //         setLoaded(true);
    //     })
    //     .catch((err) => {
    //         setError(error);
    //         console.error(err);
    //     });

    // };

    // const getById = (id) => {

    //     axios.get(`http://localhost:5015/beer/get/${id}`)
    //     .then((response) => {
    //         setBeerData([response.data]);
    //         setLoaded(true);
    //     }).catch((error) => {
    //         setLoaded(true);
    //         setError(error);
    //     });
    // };

    let tempSearch;

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="/">

                        <img
                            src={Redshiftlogo}
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Suspect Search
                    </Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="/tabs">Temp Tabs</Nav.Link>
                    </Nav> */}
                    <Form variant="dark" className="d-flex">
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
                            <Button variant="dark" onClick={() => {
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
