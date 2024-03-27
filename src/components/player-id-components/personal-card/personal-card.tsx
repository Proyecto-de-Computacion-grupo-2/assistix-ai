import {Col, Container, Row} from "react-bootstrap";
import './personal-card.scss';

export default function PersonalCard({playerInfo}) {
    return (
        <Container className="bg-white rounded-4 h-100 p-2 d-flex flex-column personal-card" fluid>
            <p className="text-secondary fw-bold">Datos personales</p>
            <Row className="flex-grow-1">
                <Col xs={4}>
                    <img src={playerInfo.playerImageUrl} width={180}></img>
                </Col>
                <Col xs={8} className="d-flex flex-column">
                    <p className="text-secondary fw-bold">{playerInfo.name.first}</p>
                    <p className="fw-bold fs-3">{playerInfo.name.last}</p>
                    <Container className="d-flex flex-column p-0 m-0 justify-content-around flex-grow-1">
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <p className="fw-bold text-secondary">Posición:</p>
                            <p className='fw-bold'>{playerInfo.position}</p>
                        </Container>
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <p className="fw-bold text-secondary">Propietario:</p>
                            <p className='fw-bold'>{playerInfo.owner}</p>
                        </Container>
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <p className="fw-bold text-secondary">Equipo:</p>
                            <img src={playerInfo.teamImageUrl} width={20} height={20}></img>
                            <p className='fw-bold'>{playerInfo.teamName}</p>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}