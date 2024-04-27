import {Col, Container, Row} from "react-bootstrap";
import './personal-card.scss';
import {PlayerIdInformation} from "../../../models/player.ts";

interface PersonalCardProps {
    player: PlayerIdInformation;
}

const positionMap = {
    1: 'PT',
    2: 'DF',
    3: 'MC',
    4: 'DL'
};

function PlayerInfo({label, value}: { label: string, value: string }) {
    return (
        <Container className="d-flex flex-row p-0 m-0 gap-2">
            <p className="fw-bold text-secondary">{label}:</p>
            <p className='fw-bold'>{value}</p>
        </Container>
    );
}

export default function PersonalCard({player}: PersonalCardProps) {

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
                        <PlayerInfo label="Posición" value={positionMap[player.position as keyof typeof positionMap]}/>
                        <PlayerInfo label="Valor"
                                    value={typeof player.player_value === 'number' ? player.player_value.toLocaleString('de-DE') + ' €' : player.player_value + ' €'}/>
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