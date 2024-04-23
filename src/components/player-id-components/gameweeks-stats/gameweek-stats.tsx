import {Container, Table} from "react-bootstrap";
import {Game} from "../../../models/game.ts";

const columnHeaders2 = [
    "Jornada",
    "Equipo",
    "Rival",
    "Mixto",
    "As",
    "Marca",
    "Mundo Deportivo",
    "Sofa Score",
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
    "Tiros Dentro de Area Parados",
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
    "Fueras De Juego",
    "Minutos Jugados",
    "Toques",
    "Entrada Último Hombre",
    "Posesión Perdida Control",
    "Goles Esperados",
    "Goles Prevenidos",
    "Pase Clave",
    "Asistencias Esperadas"
];

interface GameProps {
    games: Game;
}

export default function GameweeksStats({games}: GameProps) {
    return (
        <Container className="m-0 p-0 rounded-4 bg-white h-100" style={{overflowY: 'auto'}} fluid>
            <Container className="m-0 p-2 rounded-4" style={{maxHeight: "45vh", overflowY: 'auto'}} fluid>
                <p className="fw-bold text-secondary p-2">Últimos partidos</p>
                <Table responsive hover className='rounded-4'>
                    <thead>
                    <tr className="text-truncate">
                        {columnHeaders2.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {games.map((game, index) => (
                        <tr key={index} className='text-center text-truncate'>
                            {Object.keys(game).map((key, index_2) => (
                                key === 'team' || key === 'opposing_team' ?
                                    <td key={index_2}><img src={game[key]} alt={key} style={{height: '40px', width: '40px'}}/></td> :
                                    <td key={index_2}>{game[key]}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
        </Container>
    )
}