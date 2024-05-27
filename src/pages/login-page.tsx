import { useState } from "react";
import { getAuthToken } from "../services/auth-service/auth-service.ts";
import assistixLogo from '../assets/images/assistix-ai-logo.png'
import '../styles/login-page.scss'
import { Container, Row } from "react-bootstrap";


export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const authResponse = await getAuthToken(email, password);
        if (authResponse) {
            localStorage.setItem('jwtToken', authResponse.access_token);
        } else {
            alert('Error. Usuario o contraseña incorrectos');
        }
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //TODO: Implementar el registro de usuario
    }

    const handleFormStatus = () => {
        setIsLogin(!isLogin);

        setEmail('');
        setPassword('');
        setUserId('');
    }

    return (
        <Row className="m-0 p-0 w-100 vh-100 justify-content-center align-items-center personalized-background">
            <Container className="m-0 p-0 w-100 h-100 personalized-blur d-flex justify-content-center align-items-center">
                <Container className="m-0 py-4 w-25 bg-light rounded-4 personalized-width d-flex flex-column align-items-center">
                    <img src={assistixLogo} alt="Assistix Logo" className="m-0 p-0 w-50" />
                    <h1 className="text-center fw-bold py-2 user-select-none">Assistix AI</h1>
                    <Container className="flex-grow- m-0 w-75 h-100 d-flex flex-column align-items-center justify-content-between">
                        <h2 className="fs-4 text-center user-select-none">{isLogin ? 'Iniciar sesión' : 'Crear cuenta'}</h2>
                        <form className="w-100 h-auto d-flex flex-column justify-content-around" onSubmit={isLogin ? handleLogin : handleRegister}>
                            {
                                !isLogin &&
                                <>
                                    <label className="form-label user-select-none">Id usuario</label>
                                    <input type="userId" className="form-control mb-2" placeholder="Ingrese su id de usuario" value={userId} onChange={(e) => setUserId(e.target.value)} />
                                </>
                            }
                            <label className="form-label user-select-none">Correo electrónico</label>
                            <input type="email" className="form-control mb-2" placeholder="Ingrese su correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className="form-label user-select-none">Contraseña</label>
                            <input type="password" className="form-control mb-4" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit' className="btn btn-primary user-select-none mb-4">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</button>
                        </form>
                        <p className="personalized-text user-select-none" onClick={handleFormStatus}>{isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'} <span>{isLogin ? 'Registrate aquí' : 'Inicia sesión aquí'}</span></p>

                    </Container>

                </Container>
            </Container>
        </Row>
    )

}