import './player.scss';

interface GameWeek {
    points: number;
    gameWeek: string;
}

interface PlayerDataProps {
    label: string;
    value: number;
}

interface PlayerImageProps {
    src: string;
}

interface PlayerGameWeekProps {
    points: number;
    gameWeek: string;
}

interface PlayerGameWeeksProps {
    name: string;
    gameWeeks: GameWeek[];
}

interface Player {
    label: string;
    value: number;
    endTime: string;
    imageSrc: string;
    name: string;
    gameWeeks: GameWeek[];
}

interface PlayerMarketProps {
    player: Player;
}

function PlayerData({label, value}: PlayerDataProps) {
    return (
        <div className='d-flex flex-column align-items-center ms-3 me-3'>
            <p className='mb-1 fw-bold bg-dark rounded-1 text-white p-1'>{label}</p>
            <p className='fw-bold bg-dark rounded-1 text-white p-1'>{value}</p>
        </div>
    )
}

function PlayerImage({src}: PlayerImageProps) {
    return (
        <div>
            <img src={src}/>
        </div>
    )
}

function PlayerGameWeek({points, gameWeek}: PlayerGameWeekProps) {
    return (
        <div className='d-flex flex-column align-items-center me-2'>
            <p className='game-week-points'>{points}</p>
            <p className='game-week-number'>{gameWeek}</p>
        </div>
    )
}

function PlayerGameWeeks({name, gameWeeks}: PlayerGameWeeksProps) {
    return (
        <div className='d-flex flex-column mt-2 ms-3'>
            <p className='fw-bold'>{name}</p>
            <div className='d-flex'>
                {gameWeeks.map((week, index) => (
                    <PlayerGameWeek key={index} points={week.points} gameWeek={week.gameWeek}/>
                ))}
            </div>
        </div>
    )
}


export default function PlayerMarket({player}: PlayerMarketProps) {
    return (
        <div className='border-top border-bottom'>
            <p className='mt-3 ms-2'>Libre, termina en {player.endTime}</p>
            <div className='d-flex align-items-center mb-2'>
                <PlayerData label={player.label} value={player.value}/>
                <PlayerImage src={player.imageSrc}/>
                <PlayerGameWeeks name={player.name} gameWeeks={player.gameWeeks}/>
            </div>
        </div>
    )
}