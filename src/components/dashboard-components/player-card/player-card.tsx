import { BestPlayer, PlayerWithPointPrediction, PlayersUser } from '../../../models/player'
import './player-card.scss'

export default function NormalPlayerCard({ player }: {
    player: PlayersUser
}) {

    const photo = player.photo_body != '0' ? player.photo_body : player.photo_face

    return (
        <div className="player-card">
            <div className="player-img" style={{ backgroundImage: `url(${photo})` }} />
            <p className='text-truncate text-black'>{player?.full_name}</p>
            <div className="puntuation-container text-black">
                {player.latest_game}
            </div>
        </div>
    )
}

export function PredictionPlayerCard({ player }: {
    player: PlayerWithPointPrediction
}) {

    const photo = player.photo_body != '0' ? player.photo_body : player.photo_face

    return (
        <div className="player-card">
            <div className="player-img" style={{ backgroundImage: `url(${photo})` }} />
            <p className='text-truncate text-black'>{player.full_name}</p>
            <div className="puntuation-container text-black">
                <p className='text-truncate'>{player.prediction}</p>
            </div>
        </div>
    )
}

export function RankingPlayerCard({ player }: { player: BestPlayer }) {

    const photo = player.photo_body != '0' ? player.photo_body : player.photo_face

    return (
        <div className="player-card">
            <div className="player-img" style={{ backgroundImage: `url(${photo})` }} />
            <p className='text-truncate text-black'>{player.full_name}</p>
            <div className="puntuation-container text-black">
                <p className='text-truncate'>{player.mixed}</p>
            </div>
        </div>
    )
}