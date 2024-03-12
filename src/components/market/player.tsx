import './player.scss';

function PlayerData({label, value}) {
    return (
        <div className='d-flex flex-column align-items-center ms-3 me-3'>
            <p className='mb-1 bold'>{label}</p>
            <p className='bold'>{value}</p>
        </div>
    )
}

function PlayerImage({src}) {
    return (
        <div>
            <img src={src}/>
        </div>
    )
}

function PlayerGameWeek({points, gameWeek}) {
    return (
        <div className='d-flex flex-column align-items-center me-2'>
            <p className='game-week-points'>{points}</p>
            <p className='game-week-number'>{gameWeek}</p>
        </div>
    )
}

function PlayerGameWeeks({playerName, gameWeeks}) {
    return (
        <div className='d-flex flex-column mt-2 ms-3'>
            <p className='bold'>{playerName}</p>
            <div className='d-flex'>
                {gameWeeks.map((week, index) => (
                    <PlayerGameWeek key={index} points={week.points} gameWeek={week.gameWeek}/>
                ))}
            </div>
        </div>
    )
}


export default function PlayerMarket({player}) {
    return (
        <>
            <div className='border-top border-bottom'>
                <p className='mt-3 ms-2'>Libre, termina en {player.endTime}</p>
                <div className='d-flex align-items-center mb-2'>
                    <PlayerData label={player.label} value={player.value}/>
                    <PlayerImage src={player.imageSrc}/>
                    <PlayerGameWeeks playerName={player.name} gameWeeks={player.gameWeeks}/>
                </div>
            </div>
        </>
    )
}