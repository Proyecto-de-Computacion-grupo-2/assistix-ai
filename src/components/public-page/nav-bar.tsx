import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logoAssistixAI from '../../assets/images/assistix-ai-logo.png'

function PublicNav() {
    return (
        <Navbar expand="lg" className="bg-body-secondary" sticky='top'>
            <Container>
                <Navbar.Brand href="#home" className='d-flex align-items-center gap-2'>
                    <img
                        alt=""
                        src={logoAssistixAI}
                        width={50}
                        height={50}
                        className="d-inline-block align-top"
                    />{' '}
                    Assistix AI
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#product">Producto</Nav.Link>
                        <Nav.Link href="#more-info">Ventajas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button className="btn btn-primary">Iniciar sesión</button>
            </Container>
        </Navbar>
    );
}

export default PublicNav;