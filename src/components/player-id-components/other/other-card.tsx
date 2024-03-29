import {Col, Row} from "react-bootstrap";
import medkit from '../../../assets/botiquin.webp'

interface Player {
    type: string;
    since: string;
    until: string;
}

interface PlayerProps {
    absence: Player;
}

export default function PlayerInjuryCard({absence}:PlayerProps) {
    return (
        <Row className="m-0 p-0 h-auto border-top border-bottom w-100 align-items-center">
            <Col xs={2} sm={2} className="d-flex flex-column">
                <img className="mx-auto d-block" src={medkit} width={20}></img>
                <p className="small text-center">{absence.type}</p>
            </Col>
            <Col xs={5} sm={5} className='align-items-center'>
                <p className="small text-center">{absence.since}</p>
            </Col>
            <Col xs={5} sm={5}>
                <p className="small text-center">{absence.until}</p>
            </Col>
        </Row>
    )
}