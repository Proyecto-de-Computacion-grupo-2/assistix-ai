import { Col, Container, Row } from "react-bootstrap";
import RankingCard from "./local-card/local-card";
import misterLogo from '../../../../assets/images/misterLogo.png'
import { LeagueUser } from "../../../../models/league-user";

export default function LocalLeague({ data }: { data: LeagueUser[] }) {
    return (
        <Container className="h-100 p-0 d-flex align-items-center flex-column" fluid style={{ maxHeight: '60vh' }}>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100" fluid>
                <Container className='d-flex text-center mt-4 mb-4 fw-bold'>
                    <img src={misterLogo} width={30} height={30} className='me-2' />
                    <p>Mister Mundo Deportivo</p>
                </Container>
                <Col sm={6} xs={6} className="ps-4 fw-bold">
                    # Equipo
                </Col>
                <Col sm={3} xs={3} className="text-center p-0 m-0 fw-bold">
                    Puntos
                </Col>
                <Col sm={3} xs={3} className="text-center p-0 m-0 fw-bold">
                    Valor
                </Col>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section d-flex flex-column align-items-center"
                style={{ maxHeight: '58vh' }}>
                {
                    data.map((team, index) => {
                        return (
                            <RankingCard team={team} position={index + 1} key={index} />
                        )
                    })
                }
            </Container>
        </Container>
    )
}