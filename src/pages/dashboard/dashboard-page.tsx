import { Container, } from 'react-bootstrap'
import Layout from '../../components/layout/layout.tsx'
import './dashboard-page.scss'
import LineUp from '../../components/line-up/line-up.tsx'

export default function DashboardPage() {

    return (
        <>
            <Layout>
                <Container className='d-flex flex-grow-1 flex-row align-items-center' fluid>
                    <div className='container my-container p-3 rounded' style={{ width: '49%', height: '98%', backgroundColor: 'white' }}></div>
                    <LineUp />
                </Container>
            </Layout>
        </>
    )

}
