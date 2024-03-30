import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";

import Header from "../header/header.tsx";
import SideBar from "../side_bar/side-bar.tsx";
import SideBarMobile from "../side_bar/side-bar-mobile.tsx";

function useIsTablet() {
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1199);

    useEffect(() => {
        function handleResize() {
            setIsTablet(window.innerWidth <= 1199);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isTablet;
}

const teamInfo = {
    name: "UA2C",
    next_gameweek: "17:30:59",
    current_balance: "17560860",
    future_balance: "17560860",
    maximum_debt: "42311110",
    points: "748",
};

export default function Layout({ children }: { children: any }) {

    const isTablet = useIsTablet(); // Use the custom hook

    return (
        <Container className="min-vh-100 m-0 p-2" fluid>
            <Row className="min-vh-100 p-0 m-0 gx-2" fluid>
                {!isTablet && (
                    <Col sm={2} className="d-flex flex-column justify-content-between">
                        <SideBar />
                    </Col>
                )}
                <Col sm={isTablet ? 12 : 10}>
                    <Container className="h-100 m-0 p-0 rounded-4 d-flex flex-column gap-2" fluid>
                        {!isTablet && (
                            <Row className="p-0 m-0">
                                <Header teamInfo={teamInfo} />
                            </Row>
                        )}
                        {isTablet && (
                            <Row className="p-0 m-0">
                                <SideBarMobile />
                            </Row>
                        )}
                        <Row className="p-0 m-0 flex-grow-1">
                            {children}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}