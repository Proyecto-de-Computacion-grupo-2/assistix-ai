import {Container} from "react-bootstrap";
import "./prediction-circle.scss";
import {PlayerLastPrediction} from "../../../models/player.ts";

export default function PredictionCircle({prediction}: { prediction: PlayerLastPrediction | null }) {

    return (
        <Container className="m-0 p-2 d-flex flex-column" fluid>
            <p className="text-secondary text-truncate fw-bold">Prediccion próxima jornada</p>
            <Container className="m-0 d-0 d-flex flex-grow-1 justify-content-around flex-column align-items-center" fluid>

                {
                    prediction ? (
                        <div>
                            <div className="outside-circle d-flex justify-content-center align-items-center">
                                <div className="inside-circle d-flex justify-content-center align-items-center">
                                    <p className="text-center big-number fw-bold">{prediction.point_prediction}</p>
                                </div>
                            </div>
                            <h4 className="text-center pt-2 fw-bold">Puntos</h4>
                        </div>
                    ) : (
                        <p className="text-center fw-bold">No hay datos disponibles</p>
                    )
                }
            </Container>
        </Container>
    )
}