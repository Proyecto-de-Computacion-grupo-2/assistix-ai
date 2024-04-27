import { PlayerWithPointPrediction, PlayersUser } from '../../../models/player'
import './player-card.scss'

export default function NormalPlayerCard({ player }: {
    player: PlayersUser
}) {
    return (
        <div className="player-card">
            <div className="player-img" style={{ backgroundImage: `url(${player?.photo_body})` }} />
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
    return (
        <div className="player-card">
            <div className="player-img" style={{ backgroundImage: `url(${player?.photo_body})` }} />
            <p className='text-truncate text-black'>{player?.full_name}</p>
            <div className="puntuation-container text-black">
                <p className='text-truncate'>{player.prediction}</p>
            </div>
        </div>
    )
}