import PujadosCard from "./pujados-card/pujados-card";

export default function PujadosSection() {

    const pujados = true;

    return (
        <div className="container bg-white h-100 p-1 rounded-4 d-flex flex-column">
            <div className="container py-1 border-bottom">
                <strong className="text-secondary">Movimientos pendientes</strong>
            </div>
            {
                pujados ?

                    <div className="container container flex-grow-1 px-1 scroll-section" style={{ maxHeight: '23vh' }}>
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                    </div>

                    :

                    <div className="container container flex-grow-1 px-1 scroll-section h-100 d-flex flex-column justify-content-center align-items-center gap-2" style={{ maxHeight: '23vh' }}>
                        <p className="text-secondary">No hay movimiento pendientes</p>
                        <button className="btn btn-outline-secondary">Ir al mercado</button>
                    </div>
            }
        </div>
    )
}