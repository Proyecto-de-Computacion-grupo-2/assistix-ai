import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import logo from "../../../assets/images/assistix-ai-logo.png";
import {useNavigate} from "react-router-dom";


export default function HeaderAdmin() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <Navbar className='bg-white mt-2 rounded-4 w-100'>
            <Container  fluid>
                <Row className='w-100'>
                    <Col className='d-flex w-100 justify-content-around align-items-center'>
                        <Container  className='d-flex align-items-center'>
                            <img src={logo} alt='Assistix AI Logo' style={{width: 45, height: 45}}/>
                            <h1 className='ms-3'>Assistix AI</h1>
                        </Container>
                        <Button className='me-3' onClick={handleLogout}>Cerrar sesión</Button>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}