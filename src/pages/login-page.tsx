import {useState} from "react";
import {getAuthToken} from "../services/auth-service/auth-service.ts";
import assistixLogo from '../assets/images/assistix-ai-logo.png'
import '../styles/login-page.scss'


export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const authResponse = await getAuthToken(email, password);
        if (authResponse) {
            localStorage.setItem('jwtToken', authResponse.access_token);
            alert('Exito.');
        } else {
            alert('Error. Usuario o contraseña incorrectos');
        }
    };

    return (
        <div id='login-container'>
            <div className="login-container-blur">
                <form className="login-container" onSubmit={handleLogin}>
                    <img src={assistixLogo} alt="Assistix Logo"/>
                    <h1>Assistix AI</h1>
                    <div className="login-form">
                        <input type="email" placeholder="Ingrese su correo" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Ingrese su contraseña" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <button type='submit'>Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )

}