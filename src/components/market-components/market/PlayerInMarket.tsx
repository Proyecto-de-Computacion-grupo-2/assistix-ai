import PlayerMarket from './player.tsx'
import player_face_photo from '../../../assets/images/player-face-example.png';
import './players-in-market.scss'
import { Container } from 'react-bootstrap';


export default function PlayerInMarket() {

    const playerData = {
        label: 'DL',
        value: 118,
        endTime: '8:00:00',
        imageSrc: player_face_photo,
        name: 'Y. En Nesyri',
        gameWeeks: [
            { points: 9, gameWeek: 'J22' },
            { points: 8, gameWeek: 'J23' },
            { points: 12, gameWeek: 'J24' },
            { points: 5, gameWeek: 'J25' },
        ],
    };

    return (
        <Container className='scroll-section me-1 bg-white rounded-4 h-100 p-2 d-flex flex-column' fluid>
            <Container className="py-1 border-bottom m-0" fluid>
                <strong className="text-secondary">Mercado</strong>
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '81vh' }} fluid>
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
                <PlayerMarket player={playerData} />
            </Container>
        </Container>
    )
}