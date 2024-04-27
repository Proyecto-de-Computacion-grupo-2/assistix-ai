import {Col, Container, Row} from "react-bootstrap";
import {PlayerIdInformation} from "../../../models/player.ts";
import './personal-card.scss';
import {format_position, format_player_value} from "../../shared-components/Utils.tsx";

function PlayerInfo({label, value}: { label: string, value: string }) {
    return (
        <Container className="d-flex flex-row p-0 m-0 gap-2">
            <p className="fw-bold text-secondary">{label}:</p>
            <p className='fw-bold'>{value}</p>
        </Container>
    );
}

export default function PersonalCard({player}: { player: PlayerIdInformation | null }) {

    if (!player) {
        return <p>Loading...</p>;
    }

    return (
        <Container className="bg-white rounded-4 h-100 p-2 d-flex flex-column personal-card" fluid>
            <p className="text-secondary fw-bold p-2">Datos personales</p>
            <Row className="flex-grow-1">
                <Col xs={4}>
                    <img src={player.photo_body !== '0' ? player.photo_body : player.photo_face} width={180}/>
                </Col>
                <Col xs={8} className="d-flex flex-column">
                    <p className="fw-bold fs-3">{player.full_name}</p>
                    <Container className="d-flex flex-column p-0 m-0 justify-content-around flex-grow-1">
                        <PlayerInfo label="Posición" value={format_position(player.position)}/>
                        <PlayerInfo label="Valor"
                                    value={format_player_value(player.player_value)}/>
                        <PlayerInfo label="Propietario" value={player.user_name}/>
                        <Container className="d-flex flex-row p-0 m-0 gap-2 align-items-center">
                            <p className="fw-bold text-secondary">Equipo:</p>
                            <img src={player.team} width={40} height={40} alt='Equipo perteneciente'/>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}