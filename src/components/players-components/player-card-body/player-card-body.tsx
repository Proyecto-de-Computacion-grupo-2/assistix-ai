import {useEffect, useState} from 'react'; // Step 1
import {Card, Row, Container, Form} from 'react-bootstrap';
import {Player} from "../../../models/player.ts";
import {getPlayers} from "../../../services/player-service/players-service.ts";
import './player-card-body.scss';
import {NavLink} from "react-router-dom";
import {format_position, format_player_value} from "../../shared-components/Utils.tsx";

function PlayerCardBody({player}: { player: Player }) {
    return (
        <Card className='rounded-4 m-3' style={{width: '15rem', maxHeight: '37vh'}}>
            <Card.Img className='bg-light rounded-5' variant="top"
                      src={player.photo_body !== '0' ? player.photo_body : player.photo_face}/>
            <Card.Body>
                <Card.Title className='fw-bold'>{player.full_name}</Card.Title>
                <Card.Subtitle className='fw-bold'>
                    <p>{format_position(player.position)}</p> {format_player_value(player.player_value)}</Card.Subtitle>
                <Card.Text className='fw-bold'>{player.season_23_24} puntos</Card.Text>
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
                        placeholder="Buscar a un jugador..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Container>
                <Container className='d-flex flex-wrap m-0 p-0 justify-content-center '
                           style={{maxHeight: '78vh', overflowY: 'scroll'}} fluid>
                    {
                        filteredPlayers.map((player, index) => (
                            <NavLink to={`/player/${player.id_mundo_deportivo}`} className='text-decoration-none'>
                                <PlayerCardBody key={index} player={player}/>
                            </NavLink>
                        ))
                    }
                </Container>
            </Row>
        </Container>
    );
}