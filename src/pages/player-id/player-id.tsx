import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/shared-components/layout/layout";
import PersonalCard from "../../components/player-id-components/personal-card/personal-card.tsx";
import OtherSection from "../../components/player-id-components/other/other-section.tsx";
import GameweeksStats from "../../components/player-id-components/gameweeks-stats/gameweek-stats.tsx";
import PredictionCircle from "../../components/player-id-components/prediction-circle/prediction-circle.tsx";
import ParlimentDonut from "../../components/player-id-components/parliment-donut/parliment-donut.tsx";
import PlayerGraph from "../../components/shared-components/player/player-graph.tsx";
import './player-id.scss';

const playerData = {
    name: { first: "Lamine", last: "Yamal" },
    position: "Delantero",
    owner: "M31-G3-Cactus Panda",
    teamName: "Barcelona",
    playerImageUrl: "https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png",
    teamImageUrl: "https://cdn.gomister.com/file/cdn-common/teams/3.png?version=20240324"
};

export default function PlayerId() {
    return (
        <Layout>
            <Container className="h-100 p-0" fluid>
                <Row className="p-0 m-0 personalized-height ">
                    <Col lg={6} sm={12} className="d-flex flex-column h-100">
                        <Row className="flex-grow-1 player-id p-0">
                            <Container className="flex-grow-1 player-id p-0" fluid>
                                <PersonalCard playerInfo={playerData} />
                            </Container>
                        </Row>
                        <Row className="d-flex py-1 p-0 personalized-row-heigth">
                            <Col lg={6} sm={6} className="prediction-pad-personalized">
                                <Container className="h-100 d-flex justify-content-center bg-white rounded-4 space" style={{ maxHeight: "40vh" }} fluid>
                                    <PredictionCircle prediction={32} />
                                </Container>
                            </Col>
                            <Col lg={6} sm={6} className="other-pad-personalized">
                                <Container className="bg-white rounded-4 d-flex flex-grow-1 h-100" style={{ maxHeight: "40vh" }} fluid>
                                    <OtherSection />
                                </Container>
                            </Col>
                        </Row>
                        <Row className="d-flex p-0 p-0 personalized-row-heigth">
                            <Col lg={12} xs={12} className="d-flex p-0">
                                <Container className=" bg-white rounded-4 overflow-hidden p-0 d-flex justify-content-center" style={{ maxHeight: "40vh" }} fluid>
                                    <ParlimentDonut />
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="d-flex flex-column col-2-padding-personalized h-100">
                        <Row className="flex-grow-1 bg-white rounded-4 m-0 p-0">
                            <PlayerGraph />
                        </Row>
                        <Row className="flex-grow-1 m-0 p-0 pt-1" style={{ maxHeight: "50vh" }}>
                            <GameweeksStats />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}