import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/shared-components/layout/layout";
import LineUp from "../components/dashboard-components/line-up/line-up";
import VariationComponent from "../components/dashboard-components/variant-component/variation-component";

export default function NewDashboard() {
    return (
        <Layout>
            <Container className="p-0 m-0" fluid>
                <Row className='p-0 m-0 h-100' fluid>
                    <Col xs={12} sm={12} lg={6} className="p-0 mb-sm-1 mb-md-0">
                        <VariationComponent />
                    </Col>
                    <Col xs={12} sm={12} lg={6} className="p-0 mt-sm-1 mt-md-0">
                        <LineUp />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}