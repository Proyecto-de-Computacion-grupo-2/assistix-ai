import {Col, Container, Row,} from 'react-bootstrap'
import Layout from '../../components/layout/layout.tsx'
import './dashboard-page.scss'
import LineUp from '../../components/line-up/line-up.tsx'
import LigaRanking from '../../components/dashboard-components/liga-ranking/liga-ranking.tsx'
import RecomendationSection from '../../components/dashboard-components/recomendation-section/recomendation.tsx'
import PricesComponent from '../../components/dashboard-components/prices-component/prices-component.tsx'
import PujadosSection from '../../components/dashboard-components/pujados-section/pujados-section.tsx'
import FootballWidget from '../../components/dashboard-components/api-football/api-football.tsx'

export default function DashboardPage() {
    return (
        <Layout>
            <Container className='p-0 m-0'>
                <Row className='p-0 m-0 h-100' fluid>
                    <Col className='p-0 me-1'>
                        <Row className='p-0 m-0'>
                            <Col sm={6} className='p-0'>
                                <LigaRanking />
                            </Col>
                            <Col sm={6} className='p-0'>
                                <RecomendationSection />
                            </Col>
                        </Row>
                        <Row className='p-0 m-0'>
                            <Col sm={6} className='p-0 '>
                                <PricesComponent />
                            </Col>
                            <Col sm={6} className='p-0 '>
                                <PujadosSection />
                            </Col>
                        </Row>
                        <Row className='p-0 m-0'>
                            <Col sm={12} className='p-0 bg-white mt-2 rounded-4' style={{ height: '24vh' }}>
                                <FootballWidget/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6} className='p-0 m-0 ms-1'>
                        <LineUp />
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}
