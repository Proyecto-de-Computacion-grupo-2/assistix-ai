import player_face from '../../assets/player-face-example.png';
import './player.scss';

function PlayerData() {
    return (
        <div className='d-flex flex-column align-items-center ms-3 me-3'>
            <p className='mb-1' style={{fontWeight:'bold'}}>DL</p>
            <p style={{fontWeight:'bold'}}>118</p>
        </div>
    )
}

function PlayerImage() {
    return (
        <div>
            <img src={player_face}/>
        </div>
    )
}

function PlayerGameWeeks() {
    return (
        <div className='d-flex flex-column mt-2 ms-3'>
            <p style={{fontWeight:'bold'}}>Y. En Nesyri</p>
            <div className='d-flex'>
                <PlayerGameWeek/>
                <PlayerGameWeek/>
                <PlayerGameWeek/>
                <PlayerGameWeek/>
            </div>
        </div>
    )
}

function PlayerGameWeek() {
    return (
        <div className='d-flex flex-column align-items-center me-2'>
            <p className='game-week-points'>9</p>
            <p className='game-week-number' style={{ color: '#4EB3A4' }}>J22</p>
        </div>
    )
}

export default function PlayerMarket() {
    return (
        <>
            <div className='mt-3 mb-3 border-top border-bottom'>
                <p className='mt-3 ms-2'>Libre, termina en PROPS</p>
                <div className='d-flex align-items-center mb-2'>
                    <PlayerData/>
                    <PlayerImage/>
                    <PlayerGameWeeks/>
                </div>
            </div>
        </>
    )
}