import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
const Home = () => {
    return ( 
        <div>
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
 
export default Home;