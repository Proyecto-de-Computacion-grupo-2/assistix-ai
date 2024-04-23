import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {Player} from "../models/player.ts";
import {Game} from "../models/game.ts";
import {getPlayer, getPriceVariation} from "../services/player-service/player-service.ts";
import {getGames} from "../services/game-service/game-service.ts";
import Layout from "../components/shared-components/layout/layout.tsx";
import PersonalCard from "../components/player-id-components/personal-card/personal-card.tsx";
import OtherSection from "../components/player-id-components/other/other-section.tsx";
import GameweeksStats from "../components/player-id-components/gameweeks-stats/gameweek-stats.tsx";
import PredictionCircle from "../components/player-id-components/prediction-circle/prediction-circle.tsx";
import ParlimentDonut from "../components/player-id-components/parliment-donut/parliment-donut.tsx";
import PlayerGraph from "../components/shared-components/player/player-graph.tsx";
import '../styles/player-id.scss';
import {PriceVariation} from "../models/price-variation.ts";

export default function PlayerId() {

    const [playerData, setPlayerData] = useState<Player>({} as Player);
    const {id} = useParams();

    useEffect(() => {
        getPlayer(Number(id))
            .then(player => {
                setPlayerData(player);
            })
            .catch(error => {
                console.error(error);
            })
    },);

    const [gamesData, setGamesData] = useState<Game[]>([{} as Game]);

    useEffect(() => {
        getGames(Number(id))
            .then(games => {
                setGamesData(games);
            })
            .catch(error => {
                console.error(error);
            })
    },);

    const [priceData, setPriceData] = useState<PriceVariation[]>([{} as PriceVariation]);

    useEffect(() => {
        getPriceVariation(Number(id))
            .then(priceVariation => {
                setPriceData(priceVariation);
                console.log('priceVariation', priceVariation)
            })
            .catch(error => {
                console.error(error);
            })
    },);

    return (
        <Layout>
            <Container className="h-100 p-0" fluid>
                <Row className="p-0 m-0 personalized-height ">
                    <Col lg={6} sm={12} className="d-flex flex-column h-100">
                        <Row className="flex-grow-1 player-id p-0">
                            <Container className="flex-grow-1 player-id p-0" fluid>
                                <PersonalCard player={playerData}/>
                            </Container>
                        </Row>
                        <Row className="d-flex py-1 p-0 personalized-row-heigth">
                            <Col lg={6} sm={6} className="prediction-pad-personalized">
                                <Container className="h-100 d-flex justify-content-center bg-white rounded-4 space"
                                           style={{maxHeight: "40vh"}} fluid>
                                    <PredictionCircle prediction={32}/>
                                </Container>
                            </Col>
                            <Col lg={6} sm={6} className="other-pad-personalized">
                                <Container className="bg-white rounded-4 d-flex flex-grow-1 h-100"
                                           style={{maxHeight: "40vh"}} fluid>
                                    <OtherSection/>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="d-flex p-0 p-0 personalized-row-heigth">
                            <Col lg={12} xs={12} className="d-flex p-0">
                                <Container
                                    className=" bg-white rounded-4 overflow-hidden p-0 d-flex justify-content-center"
                                    style={{maxHeight: "40vh"}} fluid>
                                    <ParlimentDonut/>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="d-flex flex-column col-2-padding-personalized h-100">
                        <Row className="flex-grow-1 bg-white rounded-4 m-0 p-0">
                            <PlayerGraph price_data={priceData}/>
                        </Row>
                        <Row className="flex-grow-1 m-0 p-0 pt-1" style={{maxHeight: "50vh"}}>
                            <GameweeksStats games={gamesData}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}