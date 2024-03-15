import './side_bar.scss'

import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

import logo from '../../assets/assistix-ai-logo.png'
import iaImage from '../../assets/integrated-ai-logo.png'
import { FigureSoccer, HomeIcon, ChatBotIcon, SettingsIcon, MarketIcon } from '../icons/icons';

export default function SideBar() {
    return (
        <Container className="h-100 m-0 p-3 bg-white rounded-4 d-flex flex-column justify-content-between" fluid>
            <Container className="m-0 p-0 d-flex flex-column gap-4">
                <NavLink to='/' className='d-flex flex-row gap-3 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                    <img src={logo} alt="logo" className="fluid m-0 p-0" style={{ width: '60px', height: '60px' }} />
                    ASSISTIX AI
                </NavLink>
                <Container className="m-0 p-0 d-flex flex-column gap-2" fluid>
                    <p className="bold fs-5">Main</p>
                    <NavLink to='/' className='d-flex flex-row gap-2 my-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <HomeIcon fill='black' className="ms-1" />
                        Home
                    </NavLink>
                    <NavLink to='/assistant' className='d-flex flex-row gap-2 mb-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <ChatBotIcon fill='black' className="ms-1" />
                        Asistente
                    </NavLink>
                    <NavLink to='/market' className='d-flex flex-row gap-2 mb-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <MarketIcon fill='black' className="ms-1" />
                        Mercado
                    </NavLink>
                    <NavLink to='/players' className='d-flex flex-row gap-2 mb-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <FigureSoccer fill='black' className="ms-1" />
                        Jugadores
                    </NavLink>
                    <NavLink to='/settings' className='d-flex flex-row gap-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black'>
                        <SettingsIcon fill='black' className="ms-1" />
                        Configuración
                    </NavLink>
                </Container>
            </Container>
            <Container className="rounded-4 py-3 px-4 mb-5 d-flex flex-column justify-content-center align-items-center w-75 integrated-ai-color" fluid>
                <img src={iaImage} alt="logo" className="rounded m-0 p-0 w-100 h-auto" />
                <p className="fs-6 fw-bold my-2 text-center text-black">IA Integrada</p>
                <button className="btn btn-dark text-white ">Saber más</button>
            </Container>
        </Container>
    )
}

