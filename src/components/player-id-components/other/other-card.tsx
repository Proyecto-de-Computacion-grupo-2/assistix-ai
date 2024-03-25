import {Col, Row} from "react-bootstrap";
import medkit from '../../../assets/botiquin.webp'


export default function OtherCard() {
    return (
        <Row className="m-0 p-0 h-auto border-top border-bottom w-100">
            <Col xs={4} sm={4} className="d-flex flex-column">
                <img className="mx-auto d-block" src={medkit} width={20}></img>
                <p className="small text-center">Lesion</p>
            </Col>
            <Col xs={4} sm={4}>
                <p className="small">25/02/2024</p>
            </Col>
            <Col xs={4} sm={4}>
                <p className="small">25/02/2024</p>
            </Col>
        </Row>
    )
}