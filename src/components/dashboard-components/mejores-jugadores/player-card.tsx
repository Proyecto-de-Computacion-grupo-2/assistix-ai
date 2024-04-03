import Carousel from 'react-bootstrap/Carousel';
import PlayerCard from '../player-card/player-card';

import "../proximas-jornadas/card.scss"

export default function BestPlayerCard({ player }: {
    player: {
        name: string,
        url: string,
        title: string,
    }
}) {

    const newPlayer = {
        nombre: player.name,
        puntuation: 0,
        img: player.url
    }

    return (
        <Carousel.Caption className="p-0 m-0 d-flex flex-column py-2 h-100 w-100 align-items-center best-player-carrusel">
            <PlayerCard player={newPlayer} />
        </Carousel.Caption>
    )
}