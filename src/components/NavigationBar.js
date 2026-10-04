import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg" fixed="top" className="xxiNavbar">
                <Container>
                    <Navbar.Brand href="#home">XXI FILM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="xxi-navbar-nav" />
                    <Navbar.Collapse id="xxi-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#trending">Trending</Nav.Link>
                            <Nav.Link href="#filmlist">List Hero</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;   