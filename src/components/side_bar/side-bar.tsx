import './side_bar.scss'

import {NavLink} from "react-router-dom";
import {Container,Button,Modal} from "react-bootstrap";
import {useState} from 'react';

import logo from '../../assets/assistix-ai-logo.png'
import iaImage from '../../assets/integrated-ai-logo.png'
import {FigureSoccer, HomeIcon, ChatBotIcon, SettingsIcon, MarketIcon} from '../icons/icons';

export default function SideBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="h-100 m-0 p-3 bg-white rounded-4 d-flex flex-column justify-content-between" fluid>
            <Container className="m-0 p-0 d-flex flex-column gap-4">
                <NavLink to='/'
                         className='d-flex flex-row gap-3 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                    <img src={logo} alt="logo" className="fluid m-0 p-0" style={{width: '60px', height: '60px'}}/>
                    ASSISTIX AI
                </NavLink>
                <Container className="m-0 p-0 d-flex flex-column gap-2" fluid>
                    <p className="bold fs-5">Main</p>
                    <NavLink to='/'
                             className='d-flex flex-row gap-2 my-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <HomeIcon fill='black' className="ms-1"/>
                        Home
                    </NavLink>
                    <NavLink to='/assistant'
                             className='d-flex flex-row gap-2 mb-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <ChatBotIcon fill='black' className="ms-1"/>
                        Asistente
                    </NavLink>
                    <NavLink to='/market'
                             className='d-flex flex-row gap-2 mb-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <MarketIcon fill='black' className="ms-1"/>
                        Mercado
                    </NavLink>
                    <NavLink to='/players'
                             className='d-flex flex-row gap-2 mb-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <FigureSoccer fill='black' className="ms-1"/>
                        Jugadores
                    </NavLink>
                    <NavLink to='/settings'
                             className='d-flex flex-row gap-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <SettingsIcon fill='black' className="ms-1"/>
                        Ajustes
                    </NavLink>
                </Container>
            </Container>
            <Container
                className="rounded-4 py-3 px-4 mb-5 d-flex flex-column justify-content-center align-items-center w-75 integrated-ai-color"
                fluid>
                <img src={iaImage} alt="logo" className="rounded m-0 p-0 w-100 h-auto"/>
                <p className="fs-6 fw-bold my-2 text-center text-black">IA Integrada</p>

                <Button variant="dark" onClick={handleShow}>
                    Saber más
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>IA Integrada</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Modal.Body>
                </Modal>
            </Container>
        </Container>
    )
}
