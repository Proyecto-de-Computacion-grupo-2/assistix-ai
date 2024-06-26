import {useState} from 'react';
import {Container,Button,Offcanvas} from "react-bootstrap";
import SideBarNavMoney from "./side-bar-nav-money.tsx";
import logo from '../../../assets/images/misterLogo.png'
import {LeagueUser} from "../../../models/league-user.ts";
import {HamburgerMenuIcon} from "../icons/icons.tsx";

interface UserDetailsProps {
    teamInfo: LeagueUser;
}

export default function SideBarMobile({teamInfo}: UserDetailsProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='p-0 m-0'>
            <div
                className='d-flex flex-row  w-100 align-items-center justify-content-between link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black rounded-4 color-white ps-5 pe-5  '>
                <div>
                    <Button variant="white" onClick={handleShow}>
                        <i className="bi bi-list"></i>
                        <HamburgerMenuIcon fill={'black'} width={'50px'} height={'50px'}/>
                    </Button>
                </div>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="logo" className="fluid my-1 p-0 rounded-4"
                         style={{width: '60px', height: '60px'}}/>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body><SideBarNavMoney teamInfo={teamInfo}/></Offcanvas.Body>
            </Offcanvas>
        </Container>
    )
}