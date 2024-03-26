import {Col, Container, Row} from "react-bootstrap";
import LastGameCard from "./last-games-card.tsx";

export default function LastGamesSection() {
    return (
        <Container className="m-0 p-2 h-100" fluid>
            <strong className="text-secondary">Últimos partidos</strong>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
                    J
                </Col>
                <Col sm={2} xs={2} className="text-center p-0 m-0 fw-bold text-truncate">
                    Estado
                </Col>
                <Col sm={3} xs={3} className="text-center p-0 m-0 fw-bold text-truncate">
                    Rival
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
                    Result.
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
                    Marca*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
                    AS*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
                    Mundo*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
                    Sofas*
                </Col>
                <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
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