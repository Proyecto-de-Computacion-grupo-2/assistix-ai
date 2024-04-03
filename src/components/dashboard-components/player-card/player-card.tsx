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
            <p className='text-truncate text-black'>{player.nombre}</p>
            <div className="puntuation-container text-black">
                {player.puntuation}
            </div>
        </div>
    )
}