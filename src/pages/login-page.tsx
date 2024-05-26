import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAuthToken} from "../services/auth-service/auth-service.ts";
import assistixLogo from '../assets/images/assistix-ai-logo.png'
import '../styles/login-page.scss'

function parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const authResponse = await getAuthToken(email, password);
        if (authResponse) {
            const token = authResponse.access_token;

            // Decode the token and extract the role
            const decodedToken = parseJwt(token);
            const role = decodedToken.admin ? 'admin' : 'user';

            // Store the token and role in local storage
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('role', role);

            navigate('/');
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