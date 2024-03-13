import Ramanzani from '../../../../assets/40090.png'
import { TrendingDownIcon, TrendingUpIcon } from '../../../icons/icons'

export default function PriceChangeCard({ up }: { up: boolean }) {

    return (
        <div className="container border-top border-bottom d-flex flex-row justify-content-between align-items-center py-1">
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <div className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark' style={{ height: '60px', width: '60px' }}>
                    <img src={Ramanzani} alt="" style={{ height: '50px', width: '50px' }} />
                </div>
                <div className="d-flex flex-column justify-content-around">
                    <strong>Ramanzani</strong>
                    <div className="d-flex flex-row gap-1">
                        {up ? <TrendingUpIcon fill='green' /> : <TrendingDownIcon fill='red' />}
                        <span className={up ? 'text-success fw-medium' : 'fw-medium text-danger'}>5%</span>
                    </div>

                </div>
            </div>
            <p className='fw-medium'>12.500.600</p>
        </div>
    )
}