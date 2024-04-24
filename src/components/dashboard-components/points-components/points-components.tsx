import {Container, Form} from "react-bootstrap";
import PlayerFaceCard from "../../shared-components/player/player-face-card.tsx";
import {useEffect, useState} from "react";
import {getPlayersWithPointPrediction} from "../../../services/player-service/players-service.ts";
import {ChatBotIcon} from "../../shared-components/icons/icons.tsx";
import {PlayerWithPointPrediction} from "../../../models/player.ts";
import '../../../styles/dashboard-page.scss'

export default function PredictionComponent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [players, setPlayers] = useState<PlayerWithPointPrediction[]>([]);

    const filteredPlayers = players.filter(player =>
        player.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        getPlayersWithPointPrediction()
            .then(players => {
                setPlayers(players);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <Container className="p-0 m-0 d-flex flex-column" fluid>
            <Container className="py-3 border-bottom m-0" fluid>
                <strong className="text-secondary">Predicción siguiente partidos</strong>
                <Container className='mt-5 mb-2' fluid>
                    <Form.Control
                        className='rounded-3 bg-light'
                        type="text"
                        placeholder="Buscar a un jugador..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Container>
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '78vh' }}>
                {filteredPlayers.map((player, index) => (
                    <PlayerFaceCard key={index} player={player}>
                        <p className='fw-medium me-1'>{player.point_prediction}</p>
                        <ChatBotIcon fill='' className=''/>
                    </PlayerFaceCard>
                ))}
            </Container>
        </Container>
    )
}