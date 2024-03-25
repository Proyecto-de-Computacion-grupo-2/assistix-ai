import {Col, Container, Row} from "react-bootstrap";
import LastGameCard from "./last-games-card.tsx";

export default function LastGamesSection() {
    return (
        <Container className="m-0 p-2 h-100" fluid>
            <strong className="text-secondary">Últimos partidos</strong>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold">
                    J
                </Col>
                <Col sm={2} xs={2} className="text-center p-0 m-0 fw-bold">
                    Estado
                </Col>
                <Col sm={2} xs={2} className="text-center p-0 m-0 fw-bold">
                    Rival
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold">
                    Result.
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold">
                    Marca*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold">
                    AS*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold">
                    Mundo*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold">
                    Sofas*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold">
                    Total*
                </Col>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section" style={{maxHeight:"30vh"}} fluid>
                <LastGameCard />
                <LastGameCard />
                <LastGameCard />
                <LastGameCard />
                <LastGameCard />
                <LastGameCard />
                <LastGameCard />
            </Container>
        </Container>
    )
}