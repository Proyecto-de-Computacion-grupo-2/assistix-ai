import { Col, Container, Row } from "react-bootstrap";
import PlayerInjuryCard from "./other-card.tsx";

const absence = {
    type: "Lesion",
    since: "01/01/01",
    until: "01/01/01"
};

export default function OtherSection() {
    return (
        <Container className="m-0 p-2 h-100" fluid>
            <p className="text-secondary fw-bold mb-2">Ausencias</p>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                <Col sm={4} xs={4} className="text-center p-0 m-0 fw-bold">
                    Tipos
                </Col>
                <Col sm={4} xs={4} className="text-center p-0 m-0 fw-bold">
                    Desde
                </Col>
                <Col sm={4} xs={4} className="text-center p-0 m-0 fw-bold">
                    Hasta
                </Col>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: "30vh" }} fluid>
                <PlayerInjuryCard absence={absence} />
                <PlayerInjuryCard absence={absence} />
                <PlayerInjuryCard absence={absence} />
                <PlayerInjuryCard absence={absence} />
                <PlayerInjuryCard absence={absence} />
            </Container>
        </Container>
    )
}