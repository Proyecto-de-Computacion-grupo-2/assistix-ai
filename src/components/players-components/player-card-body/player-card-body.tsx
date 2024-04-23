import {useEffect, useState} from 'react'; // Step 1
import {Card, Row, Container, Form} from 'react-bootstrap';
import {Player} from "../../../models/player.ts";
import getPlayers from "../../../services/player-service/players-service.ts";
import './player-card-body.scss';

function PlayerCardBody({photo_body, photo_face, full_name, position, player_value, season_23_24}: {
    photo_body: string,
    photo_face: string,
    full_name: string,
    position: number,
    player_value: number,
    season_23_24: number
}) {
    return (
        <Card className='rounded-4 m-3' style={{width: '15rem'}}>
            <Card.Img className='bg-light rounded-5' variant="top" src={photo_body !== '0' ? photo_body : photo_face}/>
            <Card.Body>
                <Card.Title className='fw-bold'>{full_name}</Card.Title>
                <Card.Subtitle><p className='fw-bold'>{position}</p> {player_value}€</Card.Subtitle>
                <Card.Text>{season_23_24} puntos</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default function PlayersGrid() {
    const [searchQuery, setSearchQuery] = useState('');

    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        getPlayers()
            .then(players => {
                setPlayers(players);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const filteredPlayers = players.filter(player =>
        player.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container className='bg-white rounded-4' fluid>
            <Row className='gap-4 ms-4 me-4'>
                <Container className='mt-5 mb-2' fluid>
                    <Form.Control
                        className='rounded-3 bg-light'
                        type="text"
                        placeholder="Busacr a un jugador..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Container>
                <Container className='d-flex flex-wrap m-0 p-0 justify-content-center' fluid>
                    {
                        filteredPlayers.map((player, index) => (
                            <PlayerCardBody key={index} {...player} />
                        ))
                    }
                </Container>
            </Row>
        </Container>
    );
}
