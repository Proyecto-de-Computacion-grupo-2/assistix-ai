import home_icon from '../../assets/home.svg';
import star_icon from '../../assets/star.svg';
import user_logo from '../../assets/user-logo.png';
import './header.scss'


export default function Header(props) {
    return (
        <header>
            <div className="header-content">
                <div className="fi nav-map-countdown">
                    <div className="fc">
                        <img src={home_icon} alt='Home icon' />
                        <p>&gt; Home</p>
                    </div>
                    <p>Próxima jornada: {props.team.next_gameweek}</p>
                </div>
                <div className="user-money-container">
                    <div className="user-money-item">
                        <p>Saldo Actual</p>
                        <span>{props.team.current_balance} €</span>
                    </div>
                    <div className="user-money-item">
                        <p>Saldo futuro</p>
                        <span>{props.team.future_balance} €</span>
                    </div>
                    <div className="user-money-item">
                        <p>Deuda máxima</p>
                        <span>{props.team.maximum_debt} €</span>
                    </div>
                </div>
                <div className="fi info-team">
                    <div className="user-info-team">
                        <p>{props.team.name}</p>
                        <div className='points-section'>
                            <img src={star_icon} alt='Star icon' />
                            <span>{props.team.points}</span>
                        </div>
                    </div>
                    <img src={user_logo} alt='User logo' />
                </div>
            </div>
        </header>
    )
}

