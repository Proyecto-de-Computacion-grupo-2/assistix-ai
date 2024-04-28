import { Col, Container, Row, } from 'react-bootstrap'
import Layout from '../components/shared-components/layout/layout.tsx'
import '../styles/dashboard-page.scss'
import LineUp from '../components/dashboard-components/line-up/line-up.tsx'
import RecomendationSection from '../components/shared-components/recomendation-section/recomendation.tsx'
import PricesComponent from '../components/dashboard-components/prices-component/prices-component.tsx'
import BidSection from '../components/dashboard-components/pujados-section/pujados-section.tsx'
import BestPlayers from '../components/dashboard-components/mejores-jugadores/mejores-jugadores.tsx'
import LeagueRanking from "../components/dashboard-components/liga-ranking/liga-ranking.tsx";
import NextGameweek from "../components/dashboard-components/proximas-jornadas/proximas-jornadas.tsx";

/**
 * @deprecated This component is deprecated and should not be used in new code.
 */
export default function DashboardPage() {
    return (
        <Layout>
            <Container className='p-0 m-0' style={{ minHeight: '30vh' }} fluid>
                <Row className='p-0 m-0 h-100' fluid>
                    <Col className='p-0 d-flex flex-column custom-margin right-custom-margin'>
                        <Row className='p-0 row-custom-margin'>
                            <Col sm={6} className='p-0'>
                                <LeagueRanking />
                            </Col>
                            <Col sm={6} className='p-0'>
                                <RecomendationSection />
                            </Col>
                        </Row>
                        <Row className='p-0 row-custom-margin'>
                            <Col sm={6} className='p-0 '>
                                <PricesComponent />
                            </Col>
                            <Col sm={6} className='p-0 '>
                                <BidSection />
                            </Col>
                        </Row>
                        <Row className='p-0 mt-2 mx-0 flex-grow-1 row-custom-margin'>
                            <Col sm={6} className='p-0 h-100' style={{ maxHeight: '26vh' }}>
                                <NextGameweek />
                            </Col>
                            <Col sm={6} className='p-0 h-100' style={{ maxHeight: '26vh' }}>
                                <BestPlayers />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6} className='p-0 custom-margin'>
                        <LineUp />
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}
