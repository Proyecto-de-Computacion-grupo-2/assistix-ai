import { Container, Row, Col } from 'react-bootstrap';

import './layout.scss'
import SideBar from '../side_bar/side-bar';

export default function Layout1({ children }: { children: any }) {

    return (
        <Container className='grid-container' fluid>
            <Row style={{ height: '100%' }}>
                <Col sm={2}>
                    <SideBar />
                </Col>
                <Col sm={10}>
                    Probando
                </Col>
            </Row>
        </Container>

    )
}