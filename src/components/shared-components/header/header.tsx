import {Container, Row, Col, Navbar} from 'react-bootstrap';
import {LeagueUser} from "../../../models/league-user.ts";
import star_icon from '../../../assets/images/star.svg';
import './header.scss'
import {FigureSoccer} from "../icons/icons.tsx";

export default function Header({teamInfo}: { teamInfo: LeagueUser }) {
    return (
        <Navbar className="header rounded-4 py-3">
            <Container fluid>
                <Row className="w-100 d-flex align-items-center">
                    <Col className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <p>Jugadores en el Equipo</p>
                            <div className='d-flex align-items-center'>
                                <FigureSoccer fill='black' className=''/>
                                <p className='fw-bold ms-2'>{teamInfo.team_players}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div>
                            <p>Saldo Actual</p>
                            <span
                                className='fw-bold'>{typeof teamInfo.current_balance === 'number' ? teamInfo.current_balance.toLocaleString('de-DE') : '0'} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div>
                            <p>Saldo futuro</p>
                            <span
                                className='fw-bold'>{typeof teamInfo.future_balance === 'number' ? teamInfo.future_balance.toLocaleString('de-DE') : '0'} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div>
                            <p>Deuda máxima</p>
                            <span
                                className='fw-bold'>{typeof teamInfo.maximum_debt === 'number' ? teamInfo.maximum_debt.toLocaleString('de-DE') : '0'} €</span>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div>
                            <p>{teamInfo.team_name}</p>
                            <div className="d-flex">
                                <img src={star_icon} alt='Star icon'/>
                                <span className='ms-1 fw-bold'>{teamInfo.team_points}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}