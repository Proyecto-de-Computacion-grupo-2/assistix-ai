import {Col, Container, Row} from "react-bootstrap";
import './personal-card.scss';


export default function PersonalCard() {
    return (
        <Container className="bg-white rounded-4 h-100 p-2 d-flex flex-column personal-card" fluid>
            <strong className="text-secondary">Datos personales</strong>
            <Row className="flex-grow-1">
                <Col xs={4}>
                    <img src="https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png" width={180}></img>
                </Col>
                <Col xs={8} className="d-flex flex-column">
                    <strong className="text-secondary">Lamine</strong>
                    <strong className="fs-3">Yamal</strong>
                    <Container className="d-flex flex-column p-0 m-0 justify-content-around flex-grow-1">
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <strong className="text-secondary">Posición:</strong>
                            <strong>Delantero</strong>
                        </Container>
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <strong className="text-secondary">Propietario:</strong>
                            <strong>M31-G3-Cactus Panda</strong>
                        </Container>
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <strong className="text-secondary">Equipo:</strong>
                            <img src="https://cdn.gomister.com/file/cdn-common/teams/3.png?version=20240324" width={20} height={20}></img>
                            <strong>Barcelona</strong>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}