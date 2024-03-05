import './login-page.scss'

import assistixLogo from '../../assets/AssistixAI_logo.png'

export default function LoginPage() {

    return (
        <div id='login-container'>
            <div className="login-container-blur">
                <form className="login-container">
                    <img src={assistixLogo} alt="Assistix Logo" />
                    <h1>Assistix AI</h1>
                    <div className="login-form">
                        <input type="text" placeholder="Ingrese su correo" />
                        <input type="password" placeholder="Ingrese su contraseña" />
                        <button>Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )

}