import './player-card.scss'
export default function PlayerCard({ player }: {
    player: {
        nombre: string,
        puntuation: number,
        img: string
    }
}) {
    return (
        <div className="player-card">
            <div className="player-img" style={{ backgroundImage: `url(${player.img})` }} />
            <p>{player.nombre}</p>
            <div className="puntuation-container">
                {player.puntuation}
            </div>
        </div>
    )
}