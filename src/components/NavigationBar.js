import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>XXI FILM</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Trending</Nav.Link>
                        <Nav.Link>List Hero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;   