import {Container} from "react-bootstrap";
import "./prediction-circle.scss";

interface PredictionCircleProps {
    prediction: number;
}

export default function PredictionCircle({prediction}: PredictionCircleProps) {
    return (
        <Container className="m-0 p-2 d-flex flex-column">
            <p className="text-secondary text-truncate fw-bold">Prediccion próxima jornada</p>
            <Container className="m-0 d-0 d-flex flex-grow-1 justify-content-around flex-column align-items-center">
                <div className="outside-circle d-flex justify-content-center align-items-center">
                    <div className="inside-circle d-flex justify-content-center align-items-center">
                        <p className="text-center big-number fw-bold">{prediction}</p>
                    </div>
                </div>
                <p className="text-center pt-2 fw-bold">Puntos</p>
            </Container>
        </Container>
    )
}