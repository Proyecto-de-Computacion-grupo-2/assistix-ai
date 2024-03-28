import {Col, Container, Row, Table} from "react-bootstrap";
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


const columnHeaders2 = [
    "Id Partido",
    "Id Jw",
    "Id Mundo Deportivo",
    "Horario",
    "Jornada",
    "Equipo",
    "Equipo Oponente",
    "Mixto",
    "Puntuación As",
    "Puntuación Marca",
    "Puntuación Mundo Deportivo",
    "Puntuación Sofa Score",
    "Valor Actual",
    "Puntos",
    "Promedio",
    "Partidos",
    "Metadatos Goles",
    "Tarjetas",
    "Tarjeta Amarilla",
    "Doble Tarjeta Amarilla",
    "Tarjeta Roja",
    "Total Pases",
    "Pases Acertados",
    "Total Balones Largos",
    "Balones Largos Acertados",
    "Total Centros",
    "Centros Acertados",
    "Total Despejes",
    "Despeje De Linea",
    "Duelos Aéreos Perdidos",
    "Duelos Aéreos Ganados",
    "Duelos Perdidos",
    "Duelos Ganados",
    "Desposeído",
    "Desafíos Perdidos",
    "Total Concursos",
    "Concursos Ganados",
    "Buena Reclamación Alta",
    "Puñetazos",
    "Error Conduce A Tiro",
    "Error Conduce A Gol",
    "Tiros Fuera",
    "Intento De Gol A Marco",
    "Balón Al Palo",
    "Intento De Gol Bloqueado",
    "Bloqueo Jugador Campo",
    "Gran Oportunidad Creada",
    "Gran Oportunidad Fallada",
    "Penal Concedido",
    "Penal Ganado",
    "Penal Fallado",
    "Penal Atajado",
    "Goles",
    "Autogoles",
    "Tiros Dentro Del Area Parados",
    "Atajadas",
    "Asistencia De Gol",
    "Goles En Contra",
    "Goles Evitados",
    "Intercepciones Ganadas",
    "Total Intercepciones",
    "Total Portero Libero",
    "Portero Libero Acertado",
    "Total Entradas",
    "Fue Faltado",
    "Faltas",
    "Total Fueras De Juego",
    "Minutos Jugados",
    "Toques",
    "Entrada Último Hombre",
    "Posesión Perdida Control",
    "Goles Esperados",
    "Goles Prevenidos",
    "Pase Clave",
    "Asistencias Esperadas",
    "Ts"
];

const gameValues = [
    [1, 2520, 53114, '2023-08-12 22:15:10', 1, 15, 1, 14, 14, 14, 14, 14, 25119000, 210, 10, 21, 15, 6, 0, 0, 0, 49, 40, 1, 0, 1, 0, 1, 0, 1, 0, 3, 12, 0, 1, 4, 3, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 14, 0, 0, 3, 6, 0, 0, 90, 75, 0, 14, 0, 0, 1, 0, '2024-03-25 14:46:40'],
    [2, 2521, 53114, '2023-08-19 20:17:53', 2, 15, 21, 19, 18, 18, 18, 20, 25119000, 210, 10, 21, 15, 6, 0, 0, 0, 44, 41, 1, 1, 0, 0, 0, 0, 1, 0, 5, 2, 2, 0, 2, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 1, 1, 0, 81, 59, 0, 7, 1, 0, 3, 0, '2024-03-25 14:46:40'],
    [3, 2522, 53114, '2023-08-26 00:06:21', 3, 15, 5, 12, 14, 10, 10, 14, 25119000, 210, 10, 21, 15, 6, 0, 0, 0, 40, 36, 0, 0, 0, 0, 1, 0, 2, 3, 4, 7, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 5, 1, 0, 90, 57, 0, 9, 0, 0, 2, 0, '2024-03-25 14:46:40'],
    [4, 2523, 53114, '2023-09-02 18:44:39', 4, 15, 9, 12, 10, 14, 10, 12, 25119000, 210, 10, 21, 15, 6, 0, 0, 0, 53, 48, 2, 0, 4, 1, 1, 0, 2, 0, 7, 3, 1, 1, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 2, 1, 0, 90, 72, 0, 15, 1, 0, 3, 0, '2024-03-25 14:46:40'],
    [5, 2524, 53114, '2023-09-17 23:20:29', 5, 15, 16, 4, 6, 2, 2, 7, 25119000, 210, 10, 21, 15, 6, 0, 0, 0, 41, 34, 2, 2, 0, 0, 0, 0, 2, 1, 4, 8, 0, 0, 3, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 8, 0, 0, 1, 4, 1, 0, 90, 55, 0, 9, 0, 0, 2, 0, '2024-03-25 14:46:40'],
    [6, 2525, 53114, '2023-09-24 23:29:57', 6, 15, 2, 3, 2, -2, 2, 9, 25119000, 210, 10, 21, 15, 6, 1, 0, 0, 52, 47, 1, 1, 1, 0, 1, 0, 0, 1, 4, 13, 1, 0, 9, 7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 13, 0, 0, 2, 3, 1, 0, 90, 75, 0, 12, 0, 0, 1, 0, '2024-03-25 14:46:40'],
    [7, 2527, 53114, '2023-09-30 20:56:06', 8, 15, 222, 14, 14, 14, 14, 15, 25119000, 210, 10, 21, 15, 6, 0, 0, 0, 44, 43, 1, 1, 1, 0, 0, 0, 0, 0, 6, 7, 0, 2, 6, 2, 0, 0, 0, 0, 0, 3, 2, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 8, 0, 0, 4, 1, 0, 0, 74, 69, 0, 7, 1, 0, 1, 0, '2024-03-25 14:46:41'],
    [8, 2528, 53114, '2023-10-07 16:29:19', 9, 15, 50, 18, 18, 18, 18, 19, 25119000, 210, 10, 21, 15, 6, 0, 0, 0, 53, 48, 1, 1, 2, 0, 0, 0, 1, 0, 6, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 6, 0, 0, 2, 1, 2, 1, 72, 76, 0, 13, 1, 0, 0, 0, '2024-03-25 14:46:41'],
]


const HeaderComponent = ({children}: ColumnHeader) => (
    <th>
        {children}
    </th>
);

const HeaderData = ({children}) => (
    <tr>
        {children.map((data, index) => (
            <th key={index}>{data}</th>
        ))}
    </tr>
);


export default function GameweeksStats() {
    return (
        <Container className="m-0 p-2 h-100"fluid>
            <p className="fw-bold text-secondary p-2">Últimos partidos</p>
            <Table responsive style={{ maxHeight: "30vh" }}>
                <thead>
                    <tr>
                        {columnHeaders2.map((header, index) => (
                            <HeaderComponent key={index}>{header}</HeaderComponent>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {gameValues.map((data, index) => (
                        <HeaderData key={index}>{data}</HeaderData>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

/*
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
}*/
