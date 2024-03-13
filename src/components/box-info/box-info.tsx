import './box-info.scss'

export default function BoxInfo({ info, icon, right, bottom, left }: {
    info: string,
    icon: any,
    right?: string,
    bottom?: string,
    left?: string
}) {
    return (
        <div className="info-box bg-light rounded-4 d-flex justify-content-center align-items-center px-3 py-1 gap-3 " style={{ position: 'absolute', right: `${right}`, left: `${left}`, bottom: `${bottom}` }}>
            {icon}
            <p className='fw-semibold'>{info}</p>
        </div>
    )

}