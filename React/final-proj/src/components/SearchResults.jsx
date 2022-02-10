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
    const [citizenId, setCitizenId] = useState("");

    const [data, setData] = useState([]); // Filled with data from the database.

    useEffect(() => {

        if (searchQuery) {

            if (/\d/.test(searchQuery)) {

                axios.get(`http://localhost:5015/suspect/regsearch/${searchQuery}`)
                    .then((res) => {
                        // const bioInfo = res.data.bioinfo;
                        setData(res.data);
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

            } else {

                axios.get(`http://localhost:5015/suspect/search/${searchQuery}`)
                    .then((res) => {
                        // const bioInfo = res.data.bioinfo;
                        console.log(res.data[0].citizen_id);

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
                        <Card.Header id="suspectName" as="h1">{data.forenames} {data.surname}</Card.Header>
                        <Card.Body>
                            {/* <Card.Title>Special title treatment</Card.Title> */}
                            <Card.Text>
                                <SearchResultsCards
                                    home_address={data.home_address}
                                    place_of_birth={data.place_of_birth}
                                    sex={data.sex}>
                                </SearchResultsCards>
                            </Card.Text>
                            <Link to={`/tabs/${data.citizen_id}`}>
                                <Button id="moreInfoBtn" variant="primary">More Info</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>


    );
}

export default SearchResults;