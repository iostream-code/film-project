import { Container, Row, Col } from "react-bootstrap";
import antman from "../assets/images/superhero/antman.jpg";
import avenger from "../assets/images/superhero/avenger.jpg";
import batman from "../assets/images/superhero/batman.jpg";
import robinhood from "../assets/images/superhero/robinhood.jpg";
import spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import superman from "../assets/images/superhero/superman.jpg";

const films = [
    { title: "Ant-Man", img: antman },
    { title: "Avengers", img: avenger },
    { title: "Batman", img: batman },
    { title: "Robin Hood", img: robinhood },
    { title: "Spider-Man", img: spiderman },
    { title: "Superman", img: superman },
];

const FilmList = () => {
    return (
        <div id="filmlist" className="filmSection filmSection--alt">
            <Container>
                <h2 className="sectionTitle">List Hero</h2>
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

export default FilmList;
