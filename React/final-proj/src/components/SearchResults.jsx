import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const SearchResults = ({searchQuery}) => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [data, setData]=useState([]); // Filled with data from the database.

    // useEffect triggers again when

    useEffect(()=> {  
        if(searchQuery) {
            axios.get("http://localhost:5015/test/suspect/PeteHutchison")
        .then((res) => {
            console.log(res);
            setData(res.data);
            
            setLoaded(true);
        })
        .catch((err) => {
            setError(error);
            console.error(err);
        });
        }
    },[]);

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
            <h2></h2>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header></Accordion.Header>
                        <Accordion.Body>
                        {}
                        <Button variant="secondary">More Info</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>$Full name Variable</Accordion.Header>
                        <Accordion.Body>
                            
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>$Full name Variable</Accordion.Header>
                        <Accordion.Body>
                            
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
        </div>
        
        
     );
}
 
export default SearchResults;