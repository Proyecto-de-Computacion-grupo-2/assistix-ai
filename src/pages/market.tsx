import { Row, Col, Container } from 'react-bootstrap';
import PlayerGraph from "../components/shared-components/player/player-graph.tsx";
import Layout from '../components/shared-components/layout/layout.tsx'
import PlayerInMarket from "../components/market-components/market/PlayerInMarket.tsx";
import RecommendationSection from '../components/shared-components/recomendation-section/recomendation.tsx';
import '../styles/market.scss'
import { useEffect, useState } from "react";
import { PlayersInMarket } from "../models/player.ts";
import { getPlayersInMarket } from "../services/player-service/players-service.ts";
import { LoadingSpinner } from "../components/shared-components/Utils.tsx";

export default function Market() {

    const [playersData, setPlayersData] = useState<PlayersInMarket[]>([]);
    const [selectedPlayer, setSelectedPlayer] = useState<PlayersInMarket>({} as PlayersInMarket);

    useEffect(() => {
        getPlayersInMarket()
            .then(players => {
                setPlayersData(players);
                setSelectedPlayer(players[0]);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <Layout>
            <Container className='p-0 m-0'>
                <Row className='p-0 m-0 h-100' fluid>
                    <Col lg={6} className='p-0 bg-white rounded-4'>
                        {
                            playersData.length > 0 ? (
                                <PlayerInMarket players={playersData} onPlayerClick={setSelectedPlayer} />
                            ) : (
                                <LoadingSpinner />
                            )
                        }
                    </Col>
                    <Col lg={6} className='p-0'>
                        <Container className='h-100 ms-1 p-0 d-flex flex-column gap-1 vertical-gap' fluid>
                            <Row className='p-0 m-0 flex-grow-1 w-100 bg-white rounded-4 d-flex'>
                                {selectedPlayer.id_mundo_deportivo &&
                                    <PlayerGraph key={selectedPlayer.id_mundo_deportivo} player_id={selectedPlayer.id_mundo_deportivo} />}
                            </Row>
                            <Row className='p-0 m-0 flex-grow-1 w-100 bg-light rounded-4'
                                style={{ maxHeight: '45vh', overflowY: 'scroll' }}>
                                <RecommendationSection />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
