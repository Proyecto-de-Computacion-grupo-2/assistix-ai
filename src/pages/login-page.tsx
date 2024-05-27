import { useState } from "react";
import { getAuthToken } from "../services/auth-service/auth-service.ts";
import assistixLogo from '../assets/images/assistix-ai-logo.png'
import '../styles/login-page.scss'
import { Container, Row } from "react-bootstrap";
import { InformationIcon } from "../components/shared-components/icons/icons.tsx";


export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    const [isLogin, setIsLogin] = useState(true);

    const [message, setMessage] = useState('');
    const [description, setDescription] = useState('');
    const [nameButton, setNameButton] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const authResponse = await getAuthToken(email, password);
        if (authResponse) {
            localStorage.setItem('jwtToken', authResponse.access_token);
        } else {
            setIsError(true);
            setMessage('Error');
            setDescription('Usuario o contraseña incorrectos');
            setNameButton('Aceptar');
        }
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //Simular error para ver que funcione bien el pop-up
        setIsError(true);
        setMessage('Error');
        setDescription('Error al registrar usuario');
        setNameButton('Aceptar');
        //TODO: Implementar el registro de usuario
    }

    const handleFormStatus = () => {
        setIsLogin(!isLogin);

        setEmail('');
        setPassword('');
        setUserId('');
    }

    const handlePopUp = () => {
        setMessage('');
        setDescription('');
        setNameButton('');
        if (isError) {
            setIsError(false);
        }
    }

    const handelInformation = () => {
        setMessage('¿Cómo se obtiene el id del usuario?');
        setNameButton('Aceptar');
    }

    return (
        <Row className="m-0 p-0 w-100 vh-100 justify-content-center align-items-center personalized-background personalized-position">
            {message != '' && <PopUp message={message} description={description} nameButton={nameButton} action={handlePopUp} />}
            <Container className="m-0 p-0 w-100 h-100 personalized-blur d-flex justify-content-center align-items-center">
                <Container className="m-0 py-4 w-25 bg-light rounded-4 personalized-width d-flex flex-column align-items-center">
                    <img src={assistixLogo} alt="Assistix Logo" className="m-0 p-0 w-50" />
                    <h1 className="text-center fw-bold py-2 user-select-none">Assistix AI</h1>
                    <Container className="flex-grow- m-0 w-75 h-100 d-flex flex-column align-items-center justify-content-between personalized-position">
                        {!isLogin && <InformationIcon fill="currentColor" action={handelInformation} />}
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

const PopUp = ({ message, description, nameButton, action }: { message: String, description: any, nameButton: String, action?: any }) => {

    return (

        <Row className="m-0 p-0 w-100 h-100 personalized-pop-up d-flex justify-content-center align-items-center">
            <Container className={`m-0 py-2 px-4 ${description === '' ? 'w-50' : 'personalized-width'} bg-light rounded-4 d-flex flex-column align-items-center`}>
                <img src={assistixLogo} alt="Assistix Logo" className="m-0 p-0 w-25" />
                <h2 className="fs-4 text-center user-select-none py-1">{message}</h2>
                {description === '' ? (
                    <p className="w-75 text-break text-center py-2 lh-base">
                        Para poder obtener el id del usuario, es necesario que accedas al Mister Fantasy. Una vez dentro debes navegar a la
                        <a href='https://mister.mundodeportivo.com/more' target='_blank'> sección de más</a>.
                        Dentro de esta sección, debes clickear en la información de tu equipo (imagen de equipo, posición, etc.).
                        Una vez dentro, en la URL de la página, encontrarás un número que corresponde al id de tu equipo.
                        Este número es el id de usuario que debes ingresar en el campo correspondiente.
                        Por ejemplo: <br />
                        https://mister.mundodeportivo.com/more#users/123456/assistixAI <br />
                        En este caso, el id de usuario es <span className="fw-bold">123456</span>.
                    </p>
                ) : (
                    <p>{description}</p>
                )}

                <button className="btn btn-primary user-select-none" onClick={action}>{nameButton}</button>
            </Container>
        </Row>

    )
}