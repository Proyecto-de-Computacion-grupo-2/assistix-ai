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

function GameCardStats({children}: number){
    return (
        <Col xs={1} sm={1} class='justify-content-center align-items-center'>
            <p className="small text-center">{children}</p>
        </Col>
    )
}


export default function GameweekStats({game}: GameCardProps){

    const columnValues = [
        game.gameweek,
        game.opposing_team,
        game.mixed,
        game.goals,
        game.total_passes,
        game.accurate_passes,
        game.fouls,
        game.minutes_played
    ];

    return (
        <Row className="m-0 p-2 h-auto border-top border-bottom w-100">
            {columnValues.map((stat, index) => (
                <GameCardStats key={index} children={stat} />
            ))}
        </Row>
    )
}