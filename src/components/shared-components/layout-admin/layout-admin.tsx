import {ReactElement} from "react";
import {Container, Row} from "react-bootstrap";
import HeaderAdmin from "../header-admin/header-admin.tsx";

export default function LayoutAdmin({children}: { children: ReactElement}) {

    return (
        <Container fluid>
            <Row>
                <HeaderAdmin admin_name='Manolo'/>
                {children}
            </Row>
        </Container>
    );
}