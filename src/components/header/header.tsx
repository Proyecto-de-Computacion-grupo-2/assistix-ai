import home_icon from '../../assets/home.svg';
import star_icon from '../../assets/star.svg';
import user_logo from '../../assets/user-logo.png';
import './header.scss'


export default function Header() {
    return (
        <header>
            <div className="fc">
                <div>
                    <div className="fc">
                        <img src={home_icon} alt='Home icon'/>
                        <p>&gt; Home</p>
                    </div>
                    <div>
                        <p>Próxima jornada:17:30:59</p>
                    </div>
                </div>
                <div className="fc">
                    <div>
                        <p>Saldo Actual</p>
                        <p>team.saldo_actual</p>
                    </div>
                    <div>
                        <p>Saldo futuro</p>
                        <p>team.saldo_futuro</p>
                    </div>
                    <div>
                        <p>Deuda máxima</p>
                        <p>team.deuda_maxima</p>
                    </div>
                </div>
                <div>
                    <div className="fc" >
                        <div>
                            <p>team.name</p>
                            <img src={star_icon} alt='Star icon'/>
                        </div>
                        <img src={user_logo} alt='User logo'/>
                    </div>
                </div>
            </div>
        </header>
    )
}