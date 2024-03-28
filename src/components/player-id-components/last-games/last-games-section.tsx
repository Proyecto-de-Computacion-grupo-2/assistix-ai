import {Col, Container, Row} from "react-bootstrap";
import GameCard from "./last-games-card.tsx";

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
    },
    // Add more game objects as needed
];

const ColumnHeader = ({children}: ColumnHeader) => (
    <Col sm={1} xs={1} className="text-center p-0 m-0 fw-bold text-truncate">
        {children}
    </Col>
);


export default function LastGamesSection() {
    return (
        <Container className="m-0 p-2 h-100" fluid>
            <p className="fw-bold text-secondary">Últimos partidos</p>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                <ColumnHeader>#J</ColumnHeader>
                <ColumnHeader>Equipo</ColumnHeader>
                <ColumnHeader>Rival</ColumnHeader>
                <ColumnHeader>Mixto.</ColumnHeader>
                <ColumnHeader>Goles</ColumnHeader>
                <ColumnHeader>Pases totales*</ColumnHeader>
                <ColumnHeader>Pases completados</ColumnHeader>
                <ColumnHeader>Faltas</ColumnHeader>
                <ColumnHeader>Minutos jugados</ColumnHeader>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section" style={{maxHeight: "30vh"}} fluid>
                {gamesData.map((game, index) => (
                    <GameCard key={index} game={game} />
                ))}
            </Container>
        </Container>
    )
}