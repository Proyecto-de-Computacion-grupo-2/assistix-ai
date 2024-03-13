import './side_bar.scss'

import {NavLink} from "react-router-dom";
import {Container} from "react-bootstrap";

import logo from '../../assets/assistix-ai-logo.png'
import {FigureSoccer, HomeIcon, ChatBotIcon, SettingsIcon, MarketIcon} from '../icons/icons';
import clock from "../../assets/clock.svg";
import star_icon from "../../assets/star.svg";
import user_logo from '../../assets/user-logo.png';


function HeaderMobile() {

    const teamInfo = {
        name: "UA2C",
        next_gameweek: "17:30:59",
        current_balance: "17560860",
        future_balance: "17560860",
        maximum_debt: "42311110",
        points: "748",
    };

    return (
        <div>
            <div className="align-items-center mt-4 mb-2">
                <div className="">
                    <p>Próxima jornada</p>
                    <div className='d-flex align-items-center'>
                        <img className='me-1' src={clock} alt='Clock icon'/>
                        <p className='bold'>{teamInfo.next_gameweek}</p>
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div>
                    <p>Saldo Actual</p>
                    <span className='bold'>{teamInfo.current_balance} €</span>
                </div>
            </div>
            <div className='mb-2'>
                <div className="">
                    <p>Saldo futuro</p>
                    <span className='bold'>{teamInfo.future_balance} €</span>
                </div>
            </div>
            <div className='mb-2'>
                <div>
                    <p>Deuda máxima</p>
                    <span className='bold'>{teamInfo.maximum_debt} €</span>
                </div>
            </div>
            <div className="d-flex mb-2 align-items-center">
                <img className='me-1' style={{width: '40px', height: '40px'}} src={user_logo} alt='User icon'/>
                <p className='bold me-2'>{teamInfo.name}</p>
                <img src={star_icon} alt='Star icon'/>
                <span className='ms-1'>{teamInfo.points}</span>
            </div>
        </div>
    )
}

export default function SideBarNavMoney() {

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
                        Configuracion
                    </NavLink>
                </Container>
            </Container>
            <Container className="" fluid>
                <HeaderMobile/>
            </Container>
        </Container>
    )
}

