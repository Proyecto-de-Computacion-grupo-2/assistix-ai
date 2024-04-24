import { Container } from 'react-bootstrap';
import './players-in-market.scss'
import PlayerFaceCard from "../../shared-components/player/player-face-card.tsx";
import {useEffect, useState} from "react";
import {PlayersInMarket} from "../../../models/player.ts";
import {getPlayersInMarket} from "../../../services/player-service/players-service.ts";


export default function PlayerInMarket() {

    const [playersData, setPlayersData] = useState<PlayersInMarket[]>([]);

    useEffect(() => {
        getPlayersInMarket()
            .then(players => {
                setPlayersData(players);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <Container className='scroll-section me-1 bg-white rounded-4 h-100 p-2 d-flex flex-column' fluid>
            <Container className="py-1 border-bottom m-0" fluid>
                <strong className="text-secondary">Mercado</strong>
            </Container>
            <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '81vh' }} fluid>
                {playersData.map((player, index) => (
                    <PlayerFaceCard key={index} player={player}>
                        <p className='fw-medium me-1'>Precio venta</p>
                        <p className='fw-bold'>{player.sell_price.toLocaleString('de-DE')} €</p>
                    </PlayerFaceCard>
                ))}
            </Container>
        </Container>
    )
}