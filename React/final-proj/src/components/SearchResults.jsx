import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SearchResultsCards from './SearchResultsCards';
// import Manager from './Manager.jsx';

const SearchResults = ({ searchQuery }) => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [data, setData] = useState([]); // Filled with data from the database.

    // useEffect triggers again when

    //   const getData = () => {   


    useEffect(() => {

        if (searchQuery) {
            
            axios.get(`http://localhost:5015/suspect/${searchQuery}`)
                .then((res) => {
                    // const bioInfo = res.data.bioinfo;
                    console.log(res);

                    setData(res.data);
                    console.log("my data", data);
                    setLoaded(true);


                })
                .catch((err) => {
                    setError(error);
                    console.error(err);
                })
                .then(() => {
                    setTimeout(() => {
                        console.log(data)
                    }, 2000)
                });
        }
    }, [searchQuery]
    );



    const getByAddress = () => {
        //Axios
        // Renders collapsed cards of suspects with associated address.
    };

    const getByCitizenID = () => {
        //Axios
        // Renders collapsed cards of suspects with associated citizen Id.
    };

    return (
        <div>
            {/* <button type="button" onClick = {getData}> Get Data </button> */}
            {data.map((data) => {
                return (
                    <Card style={{ width: '45rem' }} className="text-center" class="shadow border" id="selectCard">
                        <Card.Header as="h1">{data.forenames} {data.surname}</Card.Header>
                        <Card.Body>
                            {/* <Card.Title>Special title treatment</Card.Title> */}
                            <Card.Text>
                                <SearchResultsCards

                                    forenames={data.forenames}
                                    surname={data.surname}
                                    home_address={data.home_address}
                                    place_of_birth={data.place_of_birth}
                                    sex={data.sex}

                                />
                            </Card.Text>
                            <Link to="/tabs/:id">
                            <Button variant="primary">More Info</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>


    );
}

export default SearchResults;