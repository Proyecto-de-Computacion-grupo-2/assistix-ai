import { Container, Row, Col } from 'react-bootstrap';

import './layout.scss'
import SideBar from '../side_bar/side-bar';
import Header from '../header/header.tsx';

export default function Layout({ children }: { children: any }) {

    const teamInfo = {
        name: "UA2C",
        next_gameweek: "17:30:59",
        current_balance: "17560860",
        future_balance: "17560860",
        maximum_debt: "42311110",
        points: "748",
    };


    return (
        <Container className='grid-container' fluid>
            <Row className="h-100">
                <Col sm={2}>
                    <SideBar />
                </Col>
                <Col sm={10} className='h-100 d-flex flex-column'>
                    <Row className='h-auto'>
                        <Header teamInfo={teamInfo} />
                    </Row>
                    <Row className='flex-grow-1' fluid>
                        {children}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}