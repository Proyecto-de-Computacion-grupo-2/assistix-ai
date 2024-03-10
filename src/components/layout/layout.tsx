import {Container, Row, Col} from 'react-bootstrap';
import SideBar from '../side_bar/side-bar';
import Header from '../header/header.tsx';

export default function Layout({children}: { children: any }) {

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
            <Row className="h-100 w-100">
                <Col sm={2} className='mt-3 pe-1'>
                    <SideBar/>
                </Col>
                <Col sm={10} className='mt-3'>
                    <Header teamInfo={teamInfo}/>
                </Col>
            </Row>
        </Container>
    )
}