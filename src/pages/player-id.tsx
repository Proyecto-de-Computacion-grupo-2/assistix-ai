import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {getPlayer, getPlayerLastPrediction} from "../services/player-service/player-service.ts";
import {getGames, getStreak} from "../services/game-service/game-service.ts";
import Layout from "../components/shared-components/layout/layout.tsx";
import PersonalCard from "../components/player-id-components/personal-card/personal-card.tsx";
import GameweeksStats from "../components/player-id-components/gameweeks-stats/gameweek-stats.tsx";
import PredictionCircle from "../components/player-id-components/prediction-circle/prediction-circle.tsx";
import ParlimentDonut from "../components/player-id-components/parliment-donut/parliment-donut.tsx";
import PlayerGraph from "../components/shared-components/player/player-graph.tsx";
import {getPlayerAbsences} from "../services/absence-service/absence-service.ts";
import AbsenceSection from "../components/player-id-components/absence/absence-section.tsx";
import {PlayerIdInformation, PlayerLastPrediction} from "../models/player.ts";
import {Game} from "../models/game.ts";
import {Absence} from "../models/absence.ts";
import '../styles/player-id.scss';
import {LoadingSpinner} from "../components/shared-components/Utils.tsx";

export default function PlayerId() {

    const [playerData, setPlayerData] = useState<PlayerIdInformation | null>({} as PlayerIdInformation);
    const [predictionData, setPredictionData] = useState<PlayerLastPrediction | null>({} as PlayerLastPrediction);
    const [absencesData, setAbsencesData] = useState<Absence[]>([{} as Absence]);
    const [gamesData, setGamesData] = useState<Game[]>([{} as Game]);
    const [streakData, setStreakData] = useState<Game[]>([{} as Game]);
    const [isLoading, setIsLoading] = useState(true);


    const {id} = useParams();

    useEffect(() => {
        const playerId = Number(id);

        setIsLoading(true);

        Promise.all([
            getPlayer(playerId),
            getPlayerLastPrediction(playerId),
            getPlayerAbsences(playerId),
            getGames(playerId),
            getStreak(playerId)
        ]).then(([player, prediction, absences, games, streak]) => {
            setPlayerData(player);
            setPredictionData(prediction);
            setAbsencesData(absences);
            setGamesData(games);
            setStreakData(streak);
            setIsLoading(false);
        }).catch(error => {
            console.error(error);
            setIsLoading(false);
        });

    }, []);

    return (
        <Layout>
            {
                isLoading ? (
                    <Container className="d-flex bg-white justify-content-center align-items-center h-100 rounded-4">
                        <LoadingSpinner/>
                    </Container>
                ):(
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
                                        <Container className="bg-white rounded-4 d-flex flex-grow-1 h-100"
                                                   style={{maxHeight: "40vh"}} fluid>
                                            <AbsenceSection absences={absencesData}/>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row className="d-flex p-0 p-0 personalized-row-heigth">
                                    <Col lg={12} xs={12} className="d-flex p-0">
                                        <Container
                                            className=" bg-white rounded-4 overflow-hidden p-0 d-flex justify-content-center"
                                            style={{maxHeight: "40vh"}} fluid>
                                            <ParlimentDonut streak={streakData}/>
                                        </Container>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} className="d-flex flex-column col-2-padding-personalized h-100">
                                <Row className="flex-grow-1 bg-white rounded-4 m-0 p-0">
                                    {playerData && playerData.id_mundo_deportivo && <PlayerGraph player_id={playerData.id_mundo_deportivo}/>}
                                </Row>
                                <Row className="flex-grow-1 m-0 p-0 pt-1" style={{maxHeight: "50vh"}}>
                                    <GameweeksStats games={gamesData}/>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </Layout>
    )
}