import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SearchResults = ({searchQuery}) => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [data, setData]=useState([]); // Filled with data from the database.

    // useEffect triggers again when

    //   const getData = () => {   


        useEffect(() => {
                      
            if(searchQuery) {
            axios.get("http://localhost:5015/test/suspect/PeteHutchison")
        .then((res) => {
            console.log(res.data.bioinfo);
            // const bioInfo = res.data.bioinfo;
            setData(res.data.bioinfo);
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
        }}, [searchQuery]
        );
     


    const getByAddress =() => {
        //Axios
        // Renders collapsed cards of suspects with associated address.
    };

    const getByCitizenID =() => {
        //Axios
        // Renders collapsed cards of suspects with associated citizen Id.
    };

    return ( 
        <div>
           {/* <button type="button" onClick = {getData}> Get Data </button> */}


            {data.map((bioInfo) => {
                return (
                <h2>Accordian Forename: {bioInfo.forenames}</h2>
            )})}


            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>title</Accordion.Header>
                        <Accordion.Body>
                            body
                        <Link to="/tabs/9676428412">
                        <Button variant="secondary">More Info</Button>
                        </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
        </div>
        
        
     );
}
 
export default SearchResults;