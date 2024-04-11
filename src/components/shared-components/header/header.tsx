import { Container, Row, Col, Navbar } from 'react-bootstrap';
import star_icon from '../../../assets/images/star.svg';
import user_logo from '../../../assets/images/user-logo.png';
import clock from '../../../assets/images/clock.svg';
import './header.scss'


export default function Header({ teamInfo }: { teamInfo: any }) {
    return (
        <Navbar className="header rounded-4">
            <Container fluid>
                <Row className="w-100 d-flex align-items-center">
                    <Col className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <p>Próxima jornada</p>
                            <div className='d-flex align-items-center'>
                                <img className='me-1' src={clock} alt='Clock icon'/>
                                <p className='bold'>{teamInfo.next_gameweek}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div>
                            <p>Saldo Actual</p>
                            <span className='bold'>{teamInfo.current_balance} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div className="">
                            <p>Saldo futuro</p>
                            <span className='bold'>{teamInfo.future_balance} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div>
                            <p>Deuda máxima</p>
                            <span className='bold'>{teamInfo.maximum_debt} €</span>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div>
                            <p className='bold'>{teamInfo.name}</p>
                            <div className="d-flex">
                                <img src={star_icon} alt='Star icon'/>
                                <span className='ms-1 bold'>{teamInfo.points}</span>
                            </div>
                        </div>
                        <img src={user_logo} alt='User logo' className="ms-2" />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}