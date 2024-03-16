import { Col, Row, } from 'react-bootstrap'
import Layout from '../../components/layout/layout.tsx'
import './dashboard-page.scss'
import LineUp from '../../components/line-up/line-up.tsx'
import LigaRanking from '../../components/dashboard-components/liga-ranking/liga-ranking.tsx'
import RecomendationSection from '../../components/dashboard-components/recomendation-section/recomendation.tsx'
import PricesComponent from '../../components/dashboard-components/prices-component/prices-component.tsx'
import PujadosSection from '../../components/dashboard-components/pujados-section/pujados-section.tsx'
import ProximasJornadas from '../../components/dashboard-components/proximas-jornadas/proximas-jornadas.tsx'

export default function DashboardPage() {
    return (
        <>
            <Layout>
                <Row className='p-0 m-0 h-100' fluid>
                    <Col className='p-0 me-2 d-flex flex-column'>
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
                        <Row className='p-0 mt-2 mx-0 flex-grow-1'>
                            <Col sm={6} className='p-0 h-100'>
                                <ProximasJornadas />
                            </Col>
                            <Col sm={6} className='p-0 h-100' style={{ height: '24vh' }}>

                            </Col>
                        </Row>
                    </Col>
                    <Col className='p-0 m-0 ms-2 lg'>
                        <LineUp />
                    </Col>
                </Row>
            </Layout >
        </>
    )
}
