import home_icon from '../../assets/home.svg';
import star_icon from '../../assets/star.svg';
import user_logo from '../../assets/user-logo.png';
//import './header.scss'


export default function Header({ teamInfo }: { teamInfo: any }) {
    return (
        <header>
            <div className="header-content">
                <div className="fi nav-map-countdown">
                    <div className="fc">
                        <img src={home_icon} alt='Home icon' />
                        <p>&gt; Home</p>
                    </div>
                    <p>Próxima jornada: {teamInfo.next_gameweek}</p>
                </div>
                <div className="user-money-container">
                    <div className="user-money-item">
                        <p>Saldo Actual</p>
                        <span>{teamInfo.current_balance} €</span>
                    </div>
                    <div className="user-money-item">
                        <p>Saldo futuro</p>
                        <span>{teamInfo.future_balance} €</span>
                    </div>
                    <div className="user-money-item">
                        <p>Deuda máxima</p>
                        <span>{teamInfo.maximum_debt} €</span>
                    </div>
                </div>
                <div className="fi info-team">
                    <div className="user-info-team">
                        <p>{teamInfo.name}</p>
                        <div className='points-section'>
                            <img src={star_icon} alt='Star icon' />
                            <span>{teamInfo.points}</span>
                        </div>
                    </div>
                    <img src={user_logo} alt='User logo' />
                </div>
            </div>
        </header>
    )
}

