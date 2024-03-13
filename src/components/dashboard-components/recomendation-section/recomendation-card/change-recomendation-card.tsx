import Ramanzani from '../../../../assets/40090.png'
import { SubstitutionIcon } from '../../../icons/icons'

export default function ChangeRecomendationCard() {

    //Este componente recibirá por parámetros los jugadores que deben de ser cambiados

    return (
        <div className="container border-top border-bottom d-flex flex-row justify-content-around align-items-center py-1">
            <div className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark' style={{ height: '60px', width: '60px' }}>
                <img src={Ramanzani} alt="" style={{ height: '50px', width: '50px' }} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <strong>Cambia</strong>
                <SubstitutionIcon fill='black' />
            </div>
            <div className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark' style={{ height: '60px', width: '60px' }}>
                <img src={Ramanzani} alt="" style={{ height: '50px', width: '50px' }} />
            </div>
        </div>
    )
}