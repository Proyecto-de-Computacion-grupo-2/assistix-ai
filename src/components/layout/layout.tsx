import { Col, Container, Row } from "react-bootstrap";

import Header from "../../components/header/header";
import SideBar from "../../components/side_bar/side-bar";
import SideBarMobile from "../../components/side_bar/side-bar-mobile.tsx";


const teamInfo = {
    name: "UA2C",
    next_gameweek: "17:30:59",
    current_balance: "17560860",
    future_balance: "17560860",
    maximum_debt: "42311110",
    points: "748",
};

export default function Layout({ children }: { children: any }) {
    return (
        <Container className="vh-100 m-0 p-2 bg-dark" fluid>
            <Row className="h-100 p-0 m-0 gx-2" fluid>
                <Col sm={2} className="d-flex flex-column justify-content-between">
                    <SideBarMobile />
                </Col>
                <Col sm={10}>
                    <Container className="h-100 m-0 p-0 rounded-4 d-flex flex-column gap-2" fluid>
                        <Row className="p-0 m-0">
                            <Header teamInfo={teamInfo} />
                        </Row>
                        <Row className="p-0 m-0 flex-grow-1">
                            {children}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}