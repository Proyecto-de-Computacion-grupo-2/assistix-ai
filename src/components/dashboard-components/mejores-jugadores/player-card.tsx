import Carousel from 'react-bootstrap/Carousel';

import "../proximas-jornadas/card.scss"
import { BestPlayer } from '../../../models/player';
import { RankingPlayerCard } from '../player-card/player-card';

export default function BestPlayerCard({ player }: {
    player: BestPlayer
}) {
    return (
        <Carousel.Caption className="p-0 m-0 d-flex flex-column py-2 h-100 w-100 align-items-center best-player-carrusel">
            <RankingPlayerCard player={player} />
        </Carousel.Caption>
    )
}