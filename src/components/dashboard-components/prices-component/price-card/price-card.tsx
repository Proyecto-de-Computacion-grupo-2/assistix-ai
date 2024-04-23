import Ramanzani from '../../../../assets/images/40090.png'
import { TrendingDownIcon, TrendingUpIcon } from '../../../shared-components/icons/icons'

interface PlayerDataProps {
    label: string;
    value: number;
}

function PlayerData({label, value}: PlayerDataProps) {
    return (
        <div className='d-flex flex-column align-items-center ms-3 me-2 mt-1'>
            <p className='mb-1 fw-bold bg-dark rounded-2 text-white p-1'>{label}</p>
            <p className='fw-bold bg-dark rounded-2 text-white p-2'>{value}</p>
        </div>
    )
}

export default function PriceChangeCard({ up }: { up: boolean }) {

    return (
        <div className="container border-top border-bottom d-flex flex-row justify-content-between align-items-center py-1">
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <PlayerData value={55} label='DL' />
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