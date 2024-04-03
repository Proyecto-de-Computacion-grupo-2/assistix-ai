import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import logo from "../../../assets/assistix-ai-logo.png";

export default function HeaderAdmin() {
    return (
        <Navbar className='bg-white mt-2 rounded-4'>
            <Container  fluid>
                <Row className='w-100 justify-content-center'>
                    <Col className='d-flex'>
                        <img src={logo} alt='Assistix AI Logo' style={{width: 40, height: 40}}/>
                        <h1>Assistix AI</h1>
                    </Col>
                    <Col>
                        <Button>Cerrar sesión AdminName</Button>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}