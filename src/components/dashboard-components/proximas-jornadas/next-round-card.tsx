import { Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


export default function MatchCard({ match }: {
    match: {
        local: string,
        localUrl: string,
        visitante: string,
        visitanteUrl: string,
        hora: string
    }
}) {
    return (
        <Carousel.Caption className="p-0 m-0 content-card">
            <Row className="p-0 m-0 h-auto d-flex justify-content-around align-items-center" fluid>
                <Col xs={4} sm={4} className="p-0 m-0 d-flex align-items-center justify-content-center">
                    <img src={match.localUrl} alt={match.local} width={50} height={50} />
                </Col>
                <Col xs={4} sm={4} className="p-0 m-0 d-flex align-items-center justify-content-center">VS</Col>
                <Col xs={4} sm={4} className="p-0 m-0 d-flex align-items-center justify-content-center">
                    <img src={match.visitanteUrl} alt={match.visitante} width={50} height={50} />
                </Col>
            </Row>
            <p>{match.hora}</p>
        </Carousel.Caption>
    )
}