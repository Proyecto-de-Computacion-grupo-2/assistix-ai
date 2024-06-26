import {Container} from "react-bootstrap";
import SideBarComponent from "./side-bar-links.tsx";
import star_icon from "../../../assets/images/star.svg";
import './side_bar.scss'
import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/assistix-ai-logo.png";
import {LeagueUser} from "../../../models/league-user.ts";
import {FigureSoccer} from "../icons/icons.tsx";
import {format_player_value} from "../Utils.tsx";

function UserDetails({teamInfo}: { teamInfo: LeagueUser }) {

    return (
        <div>
            <div className="align-items-center mt-4 mb-2">
                <div className="">
                    <p>Jugadores en el Equipo</p>
                    <div className='d-flex align-items-center'>
                        <FigureSoccer fill='black' className=''/>
                        <p className='fw-bold ms-2'>{teamInfo.team_players}</p>
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div>
                    <p>Saldo Actual</p>
                    <span className='fw-bold'>{format_player_value(teamInfo.current_balance)}</span>
                </div>
            </div>
            <div className='mb-2'>
                <div className="">
                    <p>Saldo futuro</p>
                    <span className='fw-bold'>{format_player_value(teamInfo.future_balance)}</span>
                </div>
            </div>
            <div className='mb-2'>
                <div>
                    <p>Deuda máxima</p>
                    <span className='fw-bold'>{format_player_value(teamInfo.maximum_debt)}</span>
                </div>
            </div>
            <div className="d-flex mb-2 align-items-center">
                <p className='fw-bold me-2'>{teamInfo.team_name}</p>
                <img src={star_icon} alt='Star icon'/>
                <span className='fw-bold ms-1'>{teamInfo.team_points}</span>
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

export default function SideBarNavMoney({teamInfo}: { teamInfo: LeagueUser }) {

    return (
        <Container className="h-100 m-0 p-1 bg-white rounded-4 d-flex flex-column justify-content-evenly" fluid>
            <AppName/>
            <SideBarComponent/>
            <UserDetails teamInfo={teamInfo}/>
        </Container>
    )
}

