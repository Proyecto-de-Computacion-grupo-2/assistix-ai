import Layout from '../../components/layout/layout.tsx'
import { Row, Col, Container } from 'react-bootstrap';
import PlayerInMarket from "../../components/market/PlayerInMarket.tsx";

import './market.scss'

import Ramanzani from '../../assets/40090.png'
import { ChartComponent } from '../../components/market-components/chart/chart.tsx';
import RecomendationSection from '../../components/dashboard-components/recomendation-section/recomendation.tsx';
import { useEffect, useState } from 'react';

import json from './prueba.json';

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

export default function Market() {

    const [data, setData] = useState<ChartData[]>([]);
    const [marketPrice, setMarketPrice] = useState('0');
    const [variation, setVariation] = useState('0%');

    //TODO: Fetch data from API
    // async function fetchData() {
    //     const response = await fetch(`${json}`);
    //     const data = await response.json();

    //     return data.points;
    // }


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
        <Layout>
            <Row className='p-0 m-0 h-100' fluid>
                <Col sm={6} className='p-0'>
                    <PlayerInMarket />
                </Col>
                <Col sm={6} className='p-0'>
                    <Container className='h-100 ms-1 p-0 d-flex flex-column gap-1' fluid>
                        <Row className='p-0 m-0 flex-grow-1 w-100 bg-white rounded-4 d-flex'>
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
                                        <div className="player-container rounded-4 bg-dark my-2 mx-3 d-flex justify-content-center align-items-center">
                                            <img src={Ramanzani} alt="player" height={50} width={50} />
                                        </div>
                                        <p className='fs-5 bold me-4 text-success'>{variation}</p>
                                        {/* TODO: Change color depending on the variation */}
                                    </Container>
                                </Container>
                                <Container className='flex-grow-1 p-0 m-0' fluid>
                                    <ChartComponent data={data} />
                                </Container>
                            </Container>
                        </Row>
                        <Row className='p-0 m-0 flex-grow-1 w-100 bg-light rounded-4'>
                            <RecomendationSection />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Layout>
    )

}
