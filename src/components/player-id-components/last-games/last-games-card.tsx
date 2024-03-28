import {Col, Row} from "react-bootstrap";

interface Game {
    gameweek: number;
    team: number;
    opposing_team: number;
    mixed: number;
    goals: number;
    total_passes: number;
    accurate_passes: number;
    total_tackle: number;
    fouls: number;
    minutes_played: number;
}

interface GameCardProps {
    game: Game;
}

export default function GameCard({game}: GameCardProps){
    return (
        <Row className="m-0 p-2 h-auto border-top border-bottom w-100">
            <Col xs={1} sm={1}>
                <p className="small text-secondary text-center">{game.gameweek}</p>
            </Col>
            <Col xs={2} sm={2}>
                <p className="small text-center">{game.team}</p>
            </Col>
            <Col xs={3} sm={3} className="d-flex flex-row justify-content-center">
                <img src="https://cdn.gomister.com/file/cdn-common/teams/3.png?version=20240324" width={20} height={20}></img>
                <p className="small">{game.opposing_team}</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small alert-warning text-center text-truncate">3-3</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small text-center">{game.mixed}</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small text-center">{game.goals}</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small text-center">{game.total_passes}</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small text-center">{game.accurate_passes}</p>
            </Col>
        </Row>
    )
}