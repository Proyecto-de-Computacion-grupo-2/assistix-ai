import { useState } from 'react'; // Step 1
import { Card, Row, Col, Container, Form } from 'react-bootstrap';
import './player-card-body.scss';

function PlayerCardBody({ image, name, position, value, points }: { image: string, name: string, position: string, value: number, points: number }) {
    return (
        <Card className='rounded-5' style={{ width: '15rem' }}>
            <Card.Img className='bg-light rounded-5' variant="top" src={image} />
            <Card.Body>
                <Card.Title className='fw-bold'>{name}</Card.Title>
                <Card.Subtitle><p className='fw-bold'>{position}</p> {value}€</Card.Subtitle>
                <Card.Text>{points} puntos</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default function PlayersGrid() {
    const [searchQuery, setSearchQuery] = useState('');

    const players = [
        {
            name: 'Jude Bellingham',
            position: 'MC',
            value: 1000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
        },
        {
            name: 'Sergio Herrera',
            position: 'PT',
            value: 5000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t450/p644/256x256/p644_t450_1_001_000.png'
        },
        {
            name: 'Florian Lejeune',
            position: 'DF',
            value: 5000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t184/p1208/256x256/p1208_t184_1_001_000.png'
        },
        {
            name: 'Jose Copete',
            position: 'DF',
            value: 5000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t181/p1482/256x256/p1482_t181_1_001_000.png'
        },
        {
            name: 'Jude Bellingham',
            position: 'MC',
            value: 1000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
        },
        {
            name: 'Sergio Herrera',
            position: 'PT',
            value: 5000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t450/p644/256x256/p644_t450_1_001_000.png'
        },
        {
            name: 'Florian Lejeune',
            position: 'DF',
            value: 5000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t184/p1208/256x256/p1208_t184_1_001_000.png'
        },
        {
            name: 'Jose Copete',
            position: 'DF',
            value: 5000000,
            points: 200,
            image: 'https://assets-fantasy.llt-services.com/players/t181/p1482/256x256/p1482_t181_1_001_000.png'
        },
    ]

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container className='bg-white rounded-4 scrollable-container' fluid>
            <Row className='gap-4 ms-4 me-4'>
                <Container fluid className='mt-5 mb-2'>
                    <Form.Control
                        className='rounded-3 bg-light'
                        type="text"
                        placeholder="Busacr a un jugador..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Container>
                {filteredPlayers.map((player, index) => (
                    <Col key={index} className='gap-2 fixing-responsive-dashboard'>
                        <PlayerCardBody {...player} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
