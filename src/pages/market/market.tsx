import Layout from '../../components/layout/layout.tsx'
import { Row, Col, Container } from 'react-bootstrap';
import PlayerInMarket from "../../components/market/PlayerInMarket.tsx";

import './market.scss'

import Ramanzani from '../../assets/40090.png'
import { ChartComponent } from '../../components/market-components/chart/chart.tsx';
import RecomendationSection from '../../components/dashboard-components/recomendation-section/recomendation.tsx';
interface ChartData {
    time: string;
    value: number;
}

const initialData: ChartData[] = [
    { time: '2023-03-14', value: 184000 },
    { time: '2023-03-15', value: 160000 },
    { time: '2023-03-16', value: 201000 },
    { time: '2023-03-17', value: 200000 },
    { time: '2023-03-18', value: 166000 },
    { time: '2023-03-19', value: 173000 },
    { time: '2023-03-20', value: 171000 },
];

export default function Market() {

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
                                                <p className='fs-3 bold '>12.391.000</p>
                                            </Container>
                                        </Container>
                                    </Container>
                                    <Container className='p-0 m-0 d-flex flex-column align-items-end'>
                                        <div className="player-container rounded-4 bg-dark my-2 mx-3 d-flex justify-content-center align-items-center">
                                            <img src={Ramanzani} alt="player" height={50} width={50} />
                                        </div>
                                        <p className='fs-5 bold me-4 text-success'>+5%</p>
                                    </Container>
                                </Container>
                                <Container className='flex-grow-1 p-0 m-0' fluid>
                                    <ChartComponent data={initialData} />
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
