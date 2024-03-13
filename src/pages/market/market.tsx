import Layout from '../../components/layout/layout.tsx'
import { Container, Row, Col } from 'react-bootstrap';
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

            {/* <Container className='mt-4 ms-0 me-0'>
                <Row>
                    <Col sm={6}  className='rounded-4' style={{backgroundColor:'white'}}>
                        <PlayerInMarket/>
                    </Col>
                    <Col sm={6}  className='bg-primary'>
                        <p>Hola 2
                        </p>
                    </Col>
                </Row>
            </Container> */}
        </Layout>
    )

}
