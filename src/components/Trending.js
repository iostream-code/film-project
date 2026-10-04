import { Container, Row, Col } from "react-bootstrap";
import dune from "../assets/images/trending/dune.jpg";
import everything from "../assets/images/trending/everything.jpg";
import infinite from "../assets/images/trending/infinite.jpg";
import joker from "../assets/images/trending/joker.jpg";
import lightyear from "../assets/images/trending/lightyear.jpg";
import morbius from "../assets/images/trending/morbius.jpg";

const films = [
    { title: "Dune", img: dune },
    { title: "Everything Everywhere All at Once", img: everything },
    { title: "Infinite", img: infinite },
    { title: "Joker", img: joker },
    { title: "Lightyear", img: lightyear },
    { title: "Morbius", img: morbius },
];

const Trending = () => {
    return (
        <div id="trending" className="filmSection">
            <Container>
                <h2 className="sectionTitle">Trending</h2>
                <Row className="g-4">
                    {films.map(film => (
                        <Col key={film.title} xs={6} md={4} lg={2}>
                            <div className="filmCard">
                                <img src={film.img} alt={film.title} />
                                <div className="filmCardTitle">{film.title}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Trending;
