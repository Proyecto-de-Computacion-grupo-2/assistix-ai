import { Col, Container, Row, } from 'react-bootstrap'
import Layout from '../../components/layout/layout.tsx'
import './dashboard-page.scss'
import LineUp from '../../components/line-up/line-up.tsx'
import LigaRanking from '../../components/dashboard-components/liga-ranking/liga-ranking.tsx'
import RecomendationSection from '../../components/dashboard-components/recomendation-section/recomendation.tsx'
import PricesComponent from '../../components/dashboard-components/prices-component/prices-component.tsx'
import PujadosSection from '../../components/dashboard-components/pujados-section/pujados-section.tsx'

export default function DashboardPage() {

    return (
        <>
            <Layout>
                <Row className='p-0 m-0 h-100 gx-3' fluid>
                    <Col className='p-0 me-2'>
                        <Row className='p-0 m-0'>
                            <Col sm={6} className='p-0 m-0'>
                                <LigaRanking />
                            </Col>
                            <Col sm={6} className='p-0 m-0'>
                                <RecomendationSection />
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col className='p-0 m-0'>
                                <PricesComponent />
                            </Col>
                            <Col className='p-0 m-0'>
                                <PujadosSection />
                            </Col>
                        </Row>
                        <Row>
                        </Row> */}
                    </Col>
                    <Col className='p-0 m-0 bg-white rounded-4 ms-2'>

                    </Col>
                </Row>
                {/* <Container className='d-flex flex-grow-1 flex-row align-items-center p-0' fluid>
                    <div className='container my-container rounded p-0' style={{ width: '49%', height: '98%' }}>
                        <div className="container d-flex justify-content-between flex-column p-0" style={{ height: '100%' }}>
                            <div className="row" style={{ height: '33%' }}>
                                <div className="col p-0 mx-1">
                                    <LigaRanking />
                                </div>
                                <div className="col p-0 mx-1">
                                    <RecomendationSection />
                                </div>
                            </div>
                            <div className="row" style={{ height: '33%' }} >
                                <div className="col p-0 mx-1">
                                    <PricesComponent />
                                </div>
                                <div className="col p-0 mx-1">
                                    <PujadosSection />
                                </div>
                            </div>
                            <div className="row" style={{ height: '33%' }} >
                                <div className="col p-0 mx-1">Hola</div>
                            </div>

                        </div>
                    </div>
                    <LineUp />
                </Container > */}
            </Layout >
        </>
    )

}
