import {Col, Container, Row} from "react-bootstrap";
import './personal-card.scss';
import {PlayerIdInformation} from "../../../models/player.ts";

function getPosition(position: number) {
    switch (position) {
        case 1:
            return 'PT';
        case 2:
            return 'DF';
        case 3:
            return 'MC';
        case 4:
            return 'DL';
    }
}

interface PersonalCardProps {
    player: PlayerIdInformation;
}

export default function PersonalCard({player}: PersonalCardProps) {
    return (
        <Container className="bg-white rounded-4 h-100 p-2 d-flex flex-column personal-card" fluid>
            <p className="text-secondary fw-bold p-2">Datos personales</p>
            <Row className="flex-grow-1">
                <Col xs={4}>
                    <img src={player.photo_body} width={180}></img>
                </Col>
                <Col xs={8} className="d-flex flex-column">
                    <p className="fw-bold fs-3">{player.full_name}</p>
                    <Container className="d-flex flex-column p-0 m-0 justify-content-around flex-grow-1">
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <p className="fw-bold text-secondary">Posición:</p>
                            <p className='fw-bold'>{getPosition(player.position)}</p>
                        </Container>
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <p className="fw-bold text-secondary">Valor:</p>
                            <p className='fw-bold'>{typeof player.player_value === 'number' ? player.player_value.toLocaleString('de-DE') : player.player_value} €</p>
                        </Container>
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <p className="fw-bold text-secondary">Propietario:</p>
                            <p className='fw-bold'>{player.user_name}</p>
                        </Container>
                        <Container className="d-flex flex-row p-0 m-0 gap-2">
                            <p className="fw-bold text-secondary">Equipo:</p>
                            <img src={player.team} width={40} height={40}></img>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}