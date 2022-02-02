import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Nav = () => {
    return (
        <div>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

            {/* <h2>Nav Bar!</h2>
            <Link to="/">
                <img src="data:image/png;base64,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" alt="NO IMG" width="75px" height="75px" />
            </Link>
            <br></br>
            <Link to="/Page">Random Page</Link> */}
        </div>
    );
}

export default Nav;
