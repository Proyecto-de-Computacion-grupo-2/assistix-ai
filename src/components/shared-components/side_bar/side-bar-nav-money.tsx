import {Container} from "react-bootstrap";
import SideBarComponent from "./side-bar-links.tsx";
import clock from "../../../assets/images/clock.svg";
import star_icon from "../../../assets/images/star.svg";
import user_logo from '../../../assets/images/user-logo.png';
import './side_bar.scss'
import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/assistix-ai-logo.png";


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

function AppName() {
    return (
        <NavLink to='/'
                 className='d-flex w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black mb-4'>
            <img src={logo} alt="logo" className="fluid m-0 p-0 me-2" style={{width: '60px', height: '60px'}}/>
            ASSISTIX AI
        </NavLink>
    )
}

export default function SideBarNavMoney() {

    return (
        <Container className="h-100 m-0 p-1 bg-white rounded-4 d-flex flex-column justify-content-evenly" fluid>
            <AppName/>
            <SideBarComponent/>
            <HeaderMobile/>
        </Container>
    )
}

