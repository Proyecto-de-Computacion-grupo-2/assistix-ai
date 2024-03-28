import {Col, Container, Row} from "react-bootstrap";
import GameweekStats from "./gameweeks-stats.tsx";

interface ColumnHeader {
    children: string;
}

const gamesData = [
    {
        gameweek: 1,
        team: 100,
        opposing_team: 200,
        mixed: 1,
        goals: 2,
        total_passes: 150,
        accurate_passes: 125,
        total_tackle: 10,
        fouls: 2,
        minutes_played: 90
    },
    {
        gameweek: 2,
        team: 150,
        opposing_team: 250,
        mixed: 2,
        goals: 3,
        total_passes: 160,
        accurate_passes: 130,
        total_tackle: 12,
        fouls: 1,
        minutes_played: 85
    },
    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },    {
        gameweek: 3,
        team: 200,
        opposing_team: 300,
        mixed: 3,
        goals: 1,
        total_passes: 140,
        accurate_passes: 120,
        total_tackle: 8,
        fouls: 3,
        minutes_played: 92
    },
];

const columnHeaders = [
    "#J",
    "Rival",
    "Mixto",
    "Goles",
    "PT",
    "PC",
    "Faltas",
    "MJ"
];

const ColumnHeader = ({children}: ColumnHeader) => (
    <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
        {children}
    </Col>
);

export default function GameweeksStats() {
    return (
        <Container className="m-0 p-2 h-100" fluid>
            <p className="fw-bold text-secondary p-2 mb-2">Últimos partidos</p>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                {columnHeaders.map((header, index) => (
                    <ColumnHeader key={index}>{header}</ColumnHeader>
                ))}
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section overflow-auto" style={{ maxHeight: "30vh" }}  fluid>
                {gamesData.map((game, index) => (
                    <GameweekStats key={index} game={game} />
                ))}
            </Container>
        </Container>
    )
}