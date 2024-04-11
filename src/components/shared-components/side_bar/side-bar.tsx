import {NavLink} from "react-router-dom";
import {Container} from "react-bootstrap";
import logo from '../../../assets/images/assistix-ai-logo.png'
import './side_bar.scss'
import SideBarLinks from "./side-bar-links.tsx";
import MoreInfoAI from "./more-info-ai.tsx";

function AppName() {
    return (
        <NavLink to='/'
                 className='d-flex w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black mb-4'>
            <img src={logo} alt="logo" className="fluid m-0 p-0 me-2" style={{width: '60px', height: '60px'}}/>
            ASSISTIX AI
        </NavLink>
    )
}

export default function SideBar() {
    return (
        <Container className="h-100 m-0 p-3 bg-white rounded-4 d-flex flex-column justify-content-between" fluid>
            <Container className="m-0 p-0 d-flex flex-column gap-4">
                <AppName/>
                <SideBarLinks/>
            </Container>
            <MoreInfoAI/>
        </Container>
    )
}
