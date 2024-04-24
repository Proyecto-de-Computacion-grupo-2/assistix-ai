import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {PlayerIdInformation, PlayerLastPrediction} from "../models/player.ts";
import {Game} from "../models/game.ts";
import {getPlayer, getPlayerLastPrediction, getPriceVariation} from "../services/player-service/player-service.ts";
import {getGames} from "../services/game-service/game-service.ts";
import Layout from "../components/shared-components/layout/layout.tsx";
import PersonalCard from "../components/player-id-components/personal-card/personal-card.tsx";
import GameweeksStats from "../components/player-id-components/gameweeks-stats/gameweek-stats.tsx";
import PredictionCircle from "../components/player-id-components/prediction-circle/prediction-circle.tsx";
import ParlimentDonut from "../components/player-id-components/parliment-donut/parliment-donut.tsx";
import PlayerGraph from "../components/shared-components/player/player-graph.tsx";
import '../styles/player-id.scss';
import {PriceVariation} from "../models/price-variation.ts";
import {getPlayerAbsences} from "../services/absence-service/admin-service.ts";
import {Absence} from "../models/absence.ts";
import AbsenceSection from "../components/player-id-components/absence/other-section.tsx";

export default function PlayerId() {

    const [playerData, setPlayerData] = useState<PlayerIdInformation>({} as PlayerIdInformation);
    const [predictionData, setPredictionData] = useState<PlayerLastPrediction>({} as PlayerLastPrediction);
    const [absencesData, setAbsencesData] = useState<Absence[]>([{} as Absence]);

    const [gamesData, setGamesData] = useState<Game[]>([{} as Game]);
    const [priceData, setPriceData] = useState<PriceVariation[]>([{} as PriceVariation]);

    const {id} = useParams();

    useEffect(() => {
        const playerId = Number(id);

        getPlayer(playerId)
            .then(player => {
                setPlayerData(player);
            })
            .catch(error => {
                console.error(error);
            });

        getPlayerLastPrediction(playerId)
            .then(prediction => {
                setPredictionData(prediction);
            })
            .catch(error => {
                console.error(error);
            });

        getPlayerAbsences(playerId)
            .then(absences => {
                setAbsencesData(absences)
            })
            .catch(error => {
                console.error(error);
            });

        getGames(playerId)
            .then(games => {
                setGamesData(games);
            })
            .catch(error => {
                console.error(error);
            });

        getPriceVariation(playerId)
            .then(priceVariation => {
                setPriceData(priceVariation);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

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
                                    <PredictionCircle prediction={predictionData}/>
                                </Container>
                            </Col>
                            <Col lg={6} sm={6} className="other-pad-personalized">
                                <Container className="bg-white rounded-4 d-flex flex-grow-1 h-100" style={{maxHeight: "40vh"}} fluid>
                                    <AbsenceSection absences={absencesData} />
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
                            <PlayerGraph/>
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