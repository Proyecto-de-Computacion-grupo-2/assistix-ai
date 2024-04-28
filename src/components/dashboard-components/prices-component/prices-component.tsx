import {useEffect, useState} from "react";
import {Container, Form} from "react-bootstrap";
import '../../../styles/dashboard-page.scss'
import {TrendingDownIcon, TrendingUpIcon} from "../../shared-components/icons/icons.tsx";
import PlayerFaceCard from "../../shared-components/player/player-face-card.tsx";
import {PlayerWithPricePrediction} from "../../../models/player.ts";
import {getPlayersWithPricePrediction} from "../../../services/player-service/players-service.ts";

export default function PricesComponent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [players, setPlayers] = useState<PlayerWithPricePrediction[]>([]);

    const filteredPlayers = players.filter(player =>
        player.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        getPlayersWithPricePrediction()
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
                <strong className="text-secondary">Predicción proximos precios</strong>
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
            <Container className="flex-grow-1 px-1 scroll-section" style={{maxHeight: '78vh'}}>
                {
                    players.length > 0 ? (
                        filteredPlayers.map((player, index) => (
                            <PlayerFaceCard key={index} player={player}>
                                <p className='fw-medium me-1'>{player.latest_prediction.toLocaleString('de-DE')} €</p>
                                {player.percentage_change >= 0 ? <TrendingUpIcon fill='green'/> : <TrendingDownIcon fill='red'/>}
                                {player.percentage_change >= 0 ?
                                    <p className='fw-medium me-1 text-success'>{player.percentage_change} %</p> :
                                    <p className='fw-medium me-1 text-danger'>{player.percentage_change} %</p>}
                            </PlayerFaceCard>
                        ))
                    ): (
                        <p className='mt-3 text-center'>No hay datos disponibles</p>
                    )
                }
            </Container>
        </Container>
    )
}