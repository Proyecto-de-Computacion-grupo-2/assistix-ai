import {Accordion, Form} from 'react-bootstrap';
import {FigureSoccer, MarketIcon, EmailIcon, BellIcon, MessageIcon, FootballIcon} from '../icons/icons';

import './setting.scss'


export default function Setting() {

    return (
        <main className='p-5 mt-4 ms-1 rounded-4 main'>
            <div>
                <h3 className='mb-4'>Configuración de notificaciones</h3>
                <p className='mb-3'>De modo de brindarte una experiencia única como usaurio te ofrecemos la siguiente  configuración de notificaciones en la aplicación:</p>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <FigureSoccer fill='black' className='me-2'/>
                        Jugador
                    </Accordion.Header>
                    <Accordion.Body>
                        Notificaciones que recibes cuando un jugador esta lesionado.
                        <div className='mt-4'>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <BellIcon fill='black' className='me-2'/>
                                    <p>Aplicación</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <MessageIcon fill='black' className='me-2'/>
                                    <p>Mensaje</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <EmailIcon fill='black' className='me-2'/>
                                    <p>Correo electrónico</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <FootballIcon fill='black' className='me-2'/>
                        Jornada
                    </Accordion.Header>
                    <Accordion.Body>
                        Notificaciones que recibes un día antes de empezar la jornada.
                        <div className='mt-4'>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <BellIcon fill='black' className='me-2'/>
                                    <p>Aplicación</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <MessageIcon fill='black' className='me-2'/>
                                    <p>Mensaje</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <EmailIcon fill='black' className='me-2'/>
                                    <p>Correo electrónico</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <MarketIcon fill='black' className='me-2'/>
                        Mercado
                    </Accordion.Header>
                    <Accordion.Body>
                        Notificaciones que recibes cuando un jugador sale al mercado.
                        <div className='mt-4'>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <BellIcon fill='black' className='me-2'/>
                                    <p>Aplicación</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <MessageIcon fill='black' className='me-2'/>
                                    <p>Mensaje</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <EmailIcon fill='black' className='me-2'/>
                                    <p>Correo electrónico</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <FigureSoccer fill='black' className='me-2'/>
                        Jugador
                    </Accordion.Header>
                    <Accordion.Body>
                        Notificaciones que recibes cuando un jugador esta lesionado.
                        <div className='mt-4'>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <BellIcon fill='black' className='me-2'/>
                                    <p>Aplicación</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <MessageIcon fill='black' className='me-2'/>
                                    <p>Mensaje</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <EmailIcon fill='black' className='me-2'/>
                                    <p>Correo electrónico</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <FootballIcon fill='black' className='me-2'/>
                        Jornada
                    </Accordion.Header>
                    <Accordion.Body>
                        Notificaciones que recibes un día antes de empezar la jornada.
                        <div className='mt-4'>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <BellIcon fill='black' className='me-2'/>
                                    <p>Aplicación</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div className='d-flex align-items-center'>
                                    <MessageIcon fill='black' className='me-2'/>
                                    <p>Mensaje</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <EmailIcon fill='black' className='me-2'/>
                                    <p>Correo electrónico</p>
                                </div>
                                <Form><Form.Check type="switch"/></Form>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </main>
    )
}