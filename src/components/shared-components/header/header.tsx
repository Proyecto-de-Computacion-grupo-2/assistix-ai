import { Container, Row, Col, Navbar } from 'react-bootstrap';
import star_icon from '../../../assets/images/star.svg';
import user_logo from '../../../assets/images/user-logo.png';
import clock from '../../../assets/images/clock.svg';
import './header.scss'
import {LeagueUser} from "../../../models/league-user.ts";

interface HeaderProps {
    teamInfo: LeagueUser;
}

export default function Header({ teamInfo } : HeaderProps) {
    return (
        <Navbar className="header rounded-4">
            <Container fluid>
                <Row className="w-100 d-flex align-items-center">
                    <Col className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <p>Próxima jornada</p>
                            <div className='d-flex align-items-center'>
                                <img className='me-1' src={clock} alt='Clock icon'/>
                                <p className='fw-bold'>20</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div>
                            <p>Saldo Actual</p>
                            <span className='fw-bold'>{typeof teamInfo.current_balance === 'number' ? teamInfo.current_balance.toLocaleString('de-DE') : '0'} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div className="">
                        <p>Saldo futuro</p>
                            <span className='fw-bold'>{typeof teamInfo.future_balance === 'number' ? teamInfo.future_balance.toLocaleString('de-DE') : '0'} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div>
                            <p>Deuda máxima</p>
                            <span className='fw-bold'>{typeof teamInfo.maximum_debt === 'number' ? teamInfo.maximum_debt.toLocaleString('de-DE') : '0'} €</span>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div>
                            <p className='fw-bold'>{teamInfo.team_name}</p>
                            <div className="d-flex">
                                <img src={star_icon} alt='Star icon'/>
                                <span className='ms-1 fw-bold'>{teamInfo.team_points}</span>
                            </div>
                        </div>
                        <img src={user_logo} alt='User logo' className="ms-2" />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}