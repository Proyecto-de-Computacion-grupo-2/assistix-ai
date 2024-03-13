import PlayerMarket from '../../components/market/player.tsx'
import player_face_photo from '../../assets/player-face-example.png';
import './players-in-market.scss'


export default function PlayerInMarket() {

    const playerData = {
        label: 'DL',
        value: 118,
        endTime: '8:00:00',
        imageSrc: player_face_photo,
        name: 'Y. En Nesyri',
        gameWeeks: [
            {points: 9, gameWeek: 'J22'},
            {points: 8, gameWeek: 'J23'},
            {points: 12, gameWeek: 'J24'},
            {points: 5, gameWeek: 'J25'},
        ],
    };

    return (
        <div className='scrollable-container'>
            <h5 className='mb-3'>Mercado</h5>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
            <PlayerMarket player={playerData}/>
        </div>
    )
}