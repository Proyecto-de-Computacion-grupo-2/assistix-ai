import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/shared-components/layout/layout";
import LineUp from "../components/dashboard-components/line-up/line-up";
import VariationComponent from "../components/dashboard-components/variant-component/variation-component";

export default function NewDashboard() {
    return (
        <Layout>
            <Container className="p-0 m-0" fluid>
                <Row className='p-0 m-0 h-100' fluid>
                    <Col className="p-0">
                        <VariationComponent />
                    </Col>
                    <Col className="p-0">
                        <LineUp />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}