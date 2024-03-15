import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBarNavMoney from "./side-bar-nav-money.tsx";

import logo from '../../assets/assistix-ai-logo.png'

import './side_bar.scss'

export default function SideBarMobile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div
                className='d-flex flex-row gap-3 w-100 align-items-center justify-content-around link-offset-2 link-underline link-underline-opacity-0 fs-5 fw-bold text-black rounded-4  color-white'>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="logo" className="fluid m-0 p-0" style={{width: '60px', height: '60px'}}/>
                    <p>ASSISTIX AI</p>
                </div>
                <div>
                    <Button variant="dark" onClick={handleShow}>
                        Menu
                    </Button>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body><SideBarNavMoney/></Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}