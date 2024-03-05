import home_icon from '../../assets/home.svg';
import star_icon from '../../assets/star.svg';
import user_logo from '../../assets/user-logo.png';
import './header.scss'


export default function Header(props) {
    return (
        <header>
            <div className="fc header-content">
                <div className="fi nav-map-countdown">
                    <div className="fc">
                        <img src={home_icon} alt='Home icon'/>
                        <p>&gt; Home</p>
                    </div>
                    <div className="countdown">
                        <p>Próxima jornada: {props.team.next_gameweek}</p>
                    </div>
                </div>
                <div className="fc fi user-money-container">
                    <div className="user-money-item">
                        <p>Saldo Actual</p>
                        <p>{props.team.current_balance}</p>
                    </div>
                    <div className="user-money-item">
                        <p>Saldo futuro</p>
                        <p>{props.team.future_balance}</p>
                    </div>
                    <div className="user-money-item">
                        <p>Deuda máxima</p>
                        <p>{props.team.maximum_debt}</p>
                    </div>
                </div>
                <div className="fi">
                    <div className="fc user-info-container">
                        <div className="user-info-iteam">
                            <p>{props.team.name}</p>
                            <div className='fc'>
                                <img src={star_icon} alt='Star icon'/>
                                <p>{props.team.points}</p>
                            </div>
                        </div>
                        <img src={user_logo} alt='User logo'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

