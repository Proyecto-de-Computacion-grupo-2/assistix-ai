import Layout from '../../components/layout/layout.tsx'
import { Row, Col } from 'react-bootstrap';
import PlayerInMarket from "../../components/market/PlayerInMarket.tsx";



export default function Market() {

    return (
        <Layout>
            <Row className='p-0 m-0 h-100' fluid>
                <Col sm={6} className='p-0'>
                    <PlayerInMarket />
                </Col>
                <Col sm={6} className='p-0 bg-white rounded-4'>
                    <p>Hola 2
                    </p>
                </Col>
            </Row>
        </Layout>
    )

}
