import { Accordion } from 'react-bootstrap';
import star_icon from '../../assets/star.svg';
import user_logo from '../../assets/user-logo.png';
import clock from '../../assets/clock.svg';
import './setting.scss'


export default function Setting({ teamInfo }: { teamInfo: any }) {
    return (
        <main>
            <div>
                <h2>Usuario: {teamInfo.email}</h2>
                <h3>Configuración de notificaciones</h3>
                <p>De modo de brindarte una experiencia única como usaurio te ofrecemos la siguiente  configuración de notificaciones en la aplicación:</p>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </main>

    )
}

/*
<Navbar className="header rounded-4">
            <Container fluid>
                <Row className="w-100 d-flex align-items-center">
                    <Col className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <p>Próxima jornada</p>
                            <div className='d-flex align-items-center'>
                                <img className='me-1' src={clock} alt='Clock icon'/>
                                <p>{teamInfo.next_gameweek}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <div>
                            <p>Saldo Actual</p>
                            <span>{teamInfo.current_balance} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div className="">
                            <p>Saldo futuro</p>
                            <span>{teamInfo.future_balance} €</span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div>
                            <p>Deuda máxima</p>
                            <span>{teamInfo.maximum_debt} €</span>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div>
                            <p>{teamInfo.name}</p>
                            <div className="d-flex">
                                <img src={star_icon} alt='Star icon'/>
                                <span className='ms-1'>{teamInfo.points}</span>
                            </div>
                        </div>
                        <img src={user_logo} alt='User logo' className="ms-2" />
                    </Col>
                </Row>
            </Container>
        </Navbar>
 */