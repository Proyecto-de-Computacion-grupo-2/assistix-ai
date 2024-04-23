import {useState, useEffect, ReactElement} from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Header from "../header/header.tsx";
import SideBar from "../side_bar/side-bar.tsx";
import SideBarMobile from "../side_bar/side-bar-mobile.tsx";
import {LeagueUser} from "../../../models/league-user.ts";
import {getUserMoneyDetails} from "../../../services/admin-service/admin-service.ts";

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

export default function Layout({ children }: { children: ReactElement }) {

    const isTablet = useIsTablet();
    const [teamData,setTeamData] = useState<LeagueUser>( {} as LeagueUser);

    useEffect(() => {
        getUserMoneyDetails(12705845)
            .then(teamData => {
                setTeamData(teamData);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

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
                                <Header teamInfo={teamData} />
                            </Row>
                        )}
                        {isTablet && (
                            <Row className="p-0 m-0">
                                <SideBarMobile teamInfo={teamData} />
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