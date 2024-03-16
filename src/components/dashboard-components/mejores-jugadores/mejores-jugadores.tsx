import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import BestPlayerCard from "./player-card";

import bestPlayer from "../../../assets/best-player.jfif"

const player = {
    "players": [
        {
            name: 'Bellingham',
            url: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png',
            title: 'Mejor jugador fantasy'
        },
        {
            name: 'Parejo',
            url: 'https://assets-fantasy.llt-services.com/players/t449/p310/256x256/p310_t449_1_001_000.png',
            title: 'Mejor jugador jornada'
        },
        {
            name: 'Fermin',
            url: 'https://assets-fantasy.llt-services.com/players/t178/p1715/256x256/p1715_t178_1_001_000.png',
            title: 'Mejor jugador equipo'
        },
    ]
}


export default function BestPlayers() {

    return (
        <Container className="p-1 m-0 bg-white h-100 rounded-4 d-flex flex-column ms-1 justify-content-center align-items-center" fluid>
            <Carousel className="flex-grow-1 h-100 w-100 m-0 p-0">
                {
                    player.players.map((player, index) => {
                        return (
                            <Carousel.Item key={index} className="h-100">
                                <img src={bestPlayer} width={'100%'} className="rounded-4 h-auto" style={{ maxHeight: '24vh' }} />
                                <BestPlayerCard player={player} />
                                <Carousel.Caption>
                                    <strong className="text-white">{player.title}</strong>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
    )
}