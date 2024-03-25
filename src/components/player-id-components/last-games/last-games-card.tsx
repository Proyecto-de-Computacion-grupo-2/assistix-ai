import {Col, Row} from "react-bootstrap";

export default function LastGameCard(){
    return (
        <Row className="m-0 p-2 h-auto border-top border-bottom w-100">
            <Col xs={1} sm={1}>
                <p className="small text-secondary">#J24</p>
            </Col>
            <Col xs={2} sm={2}>
                <p className="small text-center">Local</p>
            </Col>
            <Col xs={3} sm={3} className="d-flex flex-row justify-content-center">
                <img src="https://cdn.gomister.com/file/cdn-common/teams/3.png?version=20240324" width={20}></img>
                <p className="small">Barcelona</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small alert-warning">3-3</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small">16</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small">16</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small">16</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small">17</p>
            </Col>
            <Col xs={1} sm={1}>
                <p className="small">16</p>
            </Col>
        </Row>
    )
}