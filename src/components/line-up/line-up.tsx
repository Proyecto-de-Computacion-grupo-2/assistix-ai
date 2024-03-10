import BoxInfo from '../box-info/box-info'
import { LeftArrowIcon, RightArrowIcon } from '../icons/icons'
import PlayerCard from '../player-card/player-card'
import './line-up.scss'

const player = [
    {
        nombre: 'Bellingham',
        puntuation: 10,
        img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
    },
    {
        nombre: 'Parejo',
        puntuation: 10,
        img: 'https://assets-fantasy.llt-services.com/players/t449/p310/256x256/p310_t449_1_001_000.png'
    }
]

export default function LineUp() {
    return (
        <div className='container my-container p-3 rounded d-flex align-items-center justify-content-center' style={{ width: '49%', height: '98%', backgroundColor: 'white' }}>
            <div className='container d-flex justify-content-between flex-column' style={{ width: '95%', height: '98%' }}>
                <div className="container d-flex flex-column" style={{ width: '100%', height: '8%' }}>
                    <p>Plantilla</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <p>Mejor plantilla</p>
                        <button className='change-button'><LeftArrowIcon fill='white' /> </button>
                        <strong className='fs-5'>Plantilla actual</strong>
                        <button className='change-button'> <RightArrowIcon fill='white' /></button>
                        <p>Maximizar puntos</p>
                    </div>
                </div>
                <div className="container futbol-campo rounded-4 p-4" style={{ width: '100%', height: '80%' }}>
                    <div className="row d-flex lign-items-center justify-content-center">
                        <PlayerCard player={player[0]} />
                        <PlayerCard player={player[1]} />
                    </div>
                    <div className="row d-flex lign-items-center justify-content-center">
                        <PlayerCard player={player[0]} />
                        <PlayerCard player={player[1]} />
                        <PlayerCard player={player[0]} />
                    </div>
                    <div className="row d-flex lign-items-center justify-content-center">
                        <PlayerCard player={player[0]} />
                        <PlayerCard player={player[1]} />
                        <PlayerCard player={player[0]} />
                        <PlayerCard player={player[1]} />
                        <PlayerCard player={player[0]} />
                    </div>
                    <div className="row d-flex lign-items-center justify-content-center">
                        <PlayerCard player={player[0]} />
                    </div>

                    <BoxInfo info='5-3-2' icon={<RightArrowIcon fill='black' />} bottom='10px' left='5px' />
                    <BoxInfo info='93.5 M' icon={<RightArrowIcon fill='black' />} bottom='10px' right='5px' />
                </div>
                <div className="container d-flex justify-content-between align-items-center" style={{ width: '100%', height: '8%' }}>
                    <p className='fs-4 fw-medium'>17 Jugadores</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className='fs-5 mx-2 fw-medium text-danger'>PT <strong className='fs-4 text-black'>2</strong></p>
                        <p className='fs-5 mx-2 fw-medium text-warning'>DF <strong className='fs-4 text-black'>5</strong></p>
                        <p className='fs-5 mx-2 fw-medium text-danger-emphasis'>MC <strong className='fs-4 text-black'>5</strong></p>
                        <p className='fs-5 mx-2 fw-medium text-primary'>DL <strong className='fs-4 text-black'>3</strong></p>
                    </div>

                </div>
            </div>
        </div>
    )
}