import {Container} from "react-bootstrap";
import "./prediction-circle.scss";

export default function PredictionCircle(){
    return (
        <Container className="m-0 p-2 d-flex flex-column">
            <strong className="text-secondary">Prediccion próxima jornada</strong>
            <Container className="m-0 d-0 d-flex flex-grow-1 justify-content-around flex-column align-items-center">
                <div className="outside-circle d-flex justify-content-center align-items-center">
                    <div className="inside-circle d-flex justify-content-center align-items-center">
                        <strong className="text-center big-number">32</strong>
                    </div>
                </div>
                <p className="text-center pt-2 bold">Puntos</p>
            </Container>
        </Container>
    )
}