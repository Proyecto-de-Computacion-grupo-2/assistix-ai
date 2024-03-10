import './box-info.scss'

export default function BoxInfo({ info, icon, top, right, bottom, left }: {
    info: string,
    icon: any,
    top: string,
    right: string,
    bottom: string,
    left: string
}) {
    return (
        <div className="info-box bg-light rounded-4 d-flex justify-content-center align-items-center p-2 gap-3" style={{ position: 'absolute', top: `${top}`, right: `${right}`, left: `${left}`, bottom: `${bottom}` }}>
            {icon}
            <p>{info}</p>
        </div>
    )

}