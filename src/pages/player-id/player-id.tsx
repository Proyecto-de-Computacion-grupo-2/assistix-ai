import {Col, Container, Row} from "react-bootstrap";
import Layout from "../../components/layout/layout";
import PersonalCard from "../../components/player-id-components/personal-card/personal-card.tsx";
import OtherSection from "../../components/player-id-components/other/other-section.tsx";
import LastGamesSection from "../../components/player-id-components/last-games/last-games-section.tsx";
import OwnerHistorySection from "../../components/player-id-components/owner-history/owner-history-section.tsx";
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
            <Container className="h-100 p-0 pe-3" fluid>
                <Row className="p-0">
                    <Col lg={6} md={12} className="d-flex flex-column h-100">
                        <Row className="flex-grow-1 player-id">
                            <Container className="flex-grow-1 player-id">
                                <PersonalCard playerInfo={playerData}/>
                            </Container>
                        </Row>
                        <Row className="d-flex py-2">
                            <Col lg={6} md={12} className="">
                                <Container className=" bg-white rounded-4" style={{maxHeight:"50vh"}}>
                                    <ParlimentDonut/>
                                </Container>
                            </Col>
                            <Col lg={6} md={12}>
                                <Container className="h-100 d-flex bg-white rounded-4 space" style={{maxHeight:"50vh"}}>
                                    <PredictionCircle prediction={32}/>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="">
                            <Col lg={6} ms={12} className="d-flex flex-grow-1">
                                    <Container className="bg-white rounded-4 mt-2 space" style={{maxHeight:"50vh"}}>
                                        <OwnerHistorySection/>
                                    </Container>
                            </Col>
                            <Col lg={6} ms={12} className="d-flex flex-grow-1">
                                <Container className="bg-white rounded-4 mt-2 d-flex flex-grow-1" style={{maxHeight:"50vh"}}>
                                    <OtherSection/>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="flex-grow-0 d-flex flex-column ps-3 space">
                        <Row className="bg-white rounded-4 mb-1 ps-1 side-space">
                            <PlayerGraph/>
                        </Row>
                        <Row className="flex-grow-1 bg-white rounded-4 mt-1 side-space" style={{maxHeight:"50vh"}}>
                            <LastGamesSection/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}