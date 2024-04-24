import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import '../../../styles/index.scss'
import RecomendationSection from "../../shared-components/recomendation-section/recomendation";
import PricesComponent from "../prices-component/prices-component";
import StatsComponent from "../stats-component/stats-component";
import PredictionComponent from "../points-components/points-components.tsx";

export function Hola() {
    return <h1>Hola</h1>
}

export function Adios() {
    return <h1>Adios</h1>
}

export default function VariationComponent() {


    const [component, setComponent] = useState(<RecomendationSection />)
    const [active, setActive] = useState(1)

    const changeComponent = (c: number) => {
        switch (c) {
            case 1:
                setComponent(<RecomendationSection />)
                setActive(1)
                break
            case 2:
                setComponent(<PricesComponent />)
                setActive(2)
                break
            case 3:
                setComponent(<PredictionComponent />)
                setActive(3)
                break
            case 4:
                setComponent(<StatsComponent />)
                setActive(4)
                break
            default:
                setComponent(<RecomendationSection />)
                setActive(1)
                break
        }
    }

    const style = (c: boolean) => {
        return c ? 'fw-bold cursor-pointer' : 'cursor-pointer'
    }

    return (
        <Container className="p-0 m-0 bg-white rounded-4 h-100" fluid>
            <Container className="m-0 p-2 h-100 d-flex flex-column" fluid>
                <Row className="p-1 m-0" fluid>
                    <Container className="p-0 m-0 d-flex flex-row justify-content-around" fluid>
                        <div className={style(active === 1)} onClick={() => changeComponent(1)}>Recomendaciones</div>
                        <div className={style(active === 2)} onClick={() => changeComponent(2)}>Precios</div>
                        <div className={style(active === 3)} onClick={() => changeComponent(3)}>Puntos</div>
                        <div className={style(active === 4)} onClick={() => changeComponent(4)}>Estadisticas</div>
                    </Container>
                </Row>
                {component}
            </Container>
        </Container>
    )
}