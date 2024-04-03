import Table from 'react-bootstrap/Table';
import {Container, Form} from "react-bootstrap";

const header_table = ["Email", "Equipo", "Liga", "Fecha entrada", "Activo"]

const data_users = [
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>],
    ["ua2c@gmail.com", "UA2C", "PC1", "1/1/1970", <Form><Form.Check checked type="switch" /></Form>]
]

export default function AdminTable() {
    return (
        <Container className='bg-white rounded-4 mt-4'>
            <Table hover responsive className='text-center'>
                <thead>
                <tr>
                    {header_table.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data_users.map((data, index) => (
                    <tr key={index} className='text-truncate'>
                        {data.map((data_2, index_2) => (
                            <td key={index_2}>{data_2}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}