import Ramanzani from '../../../../assets/40090.png'

import '../recomendation.scss'

export default function RecomendtionCard() {

    return (
        <div className="container border-top border-bottom d-flex flex-row justify-content-around align-items-center py-1">
            <div className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark' style={{ height: '60px', width: '60px' }}>
                <img src={Ramanzani} alt="" style={{ height: '50px', width: '50px' }} />
            </div>
            <div className="d-flex flex-column">
                <strong>Ramanzani</strong>
                <div className="d-flex justify-content-around align-items-center gap-2">
                    <p className='rounded-2 m-0 align-center text-center j'>1</p>
                    <p className='rounded-2 m-0 align-center text-center j'>2</p>
                    <p className='rounded-2 m-0 align-center text-center j'>3</p>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p>Vender</p>
                <p>1.7M</p>

            </div>
        </div>
    )
}