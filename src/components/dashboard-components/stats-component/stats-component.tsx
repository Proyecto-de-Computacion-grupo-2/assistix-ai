import { Col, Container, Row } from "react-bootstrap";
import LeagueRanking from "../liga-ranking/liga-ranking";
import BestPlayers from "../mejores-jugadores/mejores-jugadores";

export default function StatsComponent() {
    return (
        <Container className="p-0 m-0 d-flex flex-column flex-grow-1 h-auto" style={{ minHeight: '60vh' }} fluid>
            <Row className="p-0 m-0 flex-grow-1">
                <LeagueRanking />
            </Row>
            <Row className="p-0 m-0 flex-grow-1">
                <Col className="p-0 m-0">
                    <BestPlayers />
                </Col>
            </Row>
        </Container>
    )
}