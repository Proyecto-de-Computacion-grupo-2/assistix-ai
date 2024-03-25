import {Col, Row} from "react-bootstrap";
import medkit from "../../../assets/botiquin.webp";
import "./owner-history.scss";

export default function OwnerHistoryCard(){
    return (
        <Row className="m-0 p-2 h-auto border-top border-bottom w-100">
            <Col xs={5} sm={5} className="d-flex flex-column">
                <img className="mx-auto d-block" src={medkit} width={20}></img>
                <p className="very-small-text text-center">M32-G5_BabooManager</p>
            </Col>
            <Col xs={2} sm={2}>
                <img className="mx-auto d-block" src={medkit} width={20}></img>
            </Col>
            <Col xs={5} sm={5} className="d-flex flex-column">
                <img className="mx-auto d-block" src={medkit} width={20}></img>
                <p className="very-small-text text-center">M32-G5_BabooManager</p>
            </Col>
        </Row>
    )
}