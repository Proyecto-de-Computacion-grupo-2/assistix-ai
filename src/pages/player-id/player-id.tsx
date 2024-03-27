import Layout from "../../components/layout/layout";
import {Col, Container, Row} from "react-bootstrap";
import PersonalCard from "../../components/player-id-components/personal-card/personal-card.tsx";
import './player-id.scss';
import {useEffect, useState} from "react";
import json from "../market/prueba.json";
import Ramanzani from "../../assets/40090.png";
import {ChartComponent} from "../../components/market-components/chart/chart.tsx";
import OtherSection from "../../components/player-id-components/other/other-section.tsx";
import LastGamesSection from "../../components/player-id-components/last-games/last-games-section.tsx";
import OwnerHistorySection from "../../components/player-id-components/owner-history/owner-history-section.tsx";
import PredictionCircle from "../../components/player-id-components/prediction-circle/prediction-circle.tsx";
import ParlimentDonut from "../../components/player-id-components/parliment-donut/parliment-donut.tsx";

interface ChartData {
    time: string;
    value: number;
}

interface InputFormat {
    value: number;
    date: string;
}

function convertFormat(input: InputFormat[]): ChartData[] {
    return input.map(item => {
        const date = new Date(Date.parse(item.date.replace(/(\d+) (\w+)/, "$2 $1, ")));
        date.setHours(12); // Ajusta la hora a mediodía
        return {
            time: date.toISOString().split('T')[0],
            value: item.value
        };
    });
}


function PlayerGraph() {

    const [data, setData] = useState<ChartData[]>([]);
    const [marketPrice, setMarketPrice] = useState('0');
    const [variation, setVariation] = useState('0%');

    function processData() {
        const data = convertFormat(json.points as InputFormat[]);
        setData(data);
        setMarketPrice(`${(data[data.length - 1].value).toLocaleString('es-ES')} €`);
        setVariation(`${((data[data.length - 1].value - data[data.length - 2].value) / data[data.length - 2].value * 100).toFixed(2)}%`);
    }

    useEffect(() => {
        processData();
    }, []);

    return (
        <Container className='p-2 h-100 d-flex flex-column' fluid>
            <Container className='py-1 m-0 d-flex flex-row justify-content-between' fluid>
                <Container className='p-0 m-0 d-flex flex-column justify-content-between'>
                    <strong className='text-secondary'>Historial precios</strong>
                    <Container className='d-flex flex-column p-0 m-0'>
                        <p className='fs-5 bold text-secondary'>PRECIO ACTUAL</p>
                        <Container className='d-flex flex-row p-0 m-0 gap-1'>
                            <p className='fs-3 bold '>{marketPrice}</p>
                        </Container>
                    </Container>
                </Container>
                <Container className='p-0 m-0 d-flex flex-column align-items-end'>
                    <div
                        className="player-container rounded-4 bg-dark my-2 mx-3 d-flex justify-content-center align-items-center">
                        <img src={Ramanzani} alt="player" height={50} width={50}/>
                    </div>
                    <p className='fs-5 bold me-4 text-success'>{variation}</p>
                    {/* TODO: Change color depending on the variation */}
                </Container>
            </Container>
            <Container className='flex-grow-1 p-0 m-0' fluid>
                <ChartComponent data={data}/>
            </Container>
        </Container>
    )
}


export default function PlayerId() {
    return (
        <Layout>
            <Container className="h-100 p-0 pe-3" fluid>
                <Row className=" p-0">
                    <Col lg={6} md={12} className="d-flex flex-column h-100">
                        <Row className="flex-grow-1 player-id">
                            <Container className="flex-grow-1 player-id">
                                <PersonalCard/>
                            </Container>
                        </Row>
                        <Row className=" d-flex py-2">
                            <Col lg={6} md={12} className="">
                                <Container className=" bg-white rounded-4" style={{maxHeight:"50vh"}}>
                                    <ParlimentDonut/>
                                </Container>
                            </Col>
                            <Col lg={6} md={12}>
                                <Container className="h-100 d-flex bg-white rounded-4 space" style={{maxHeight:"50vh"}}>
                                    <PredictionCircle/>
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