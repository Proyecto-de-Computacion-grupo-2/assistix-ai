import { Col, Container, Row } from "react-bootstrap";
import AssistixAILogo from "../assets/images/assistix-ai-logo.png"

import "../styles/public-page.scss"

import imgPrototype from "../assets/images/AssistixAI.webp"
import { BrainIcon, MultiDeviceIcon, RobotIcon } from "../components/shared-components/icons/icons";
import PublicNav from "../components/public-page/nav-bar";

import bgVideo from "../assets/video/bgVideo.mp4"
import Footer from "../components/public-page/footer";

export default function PublicPage() {
    return (
        <Container className="h-auto p-0 bg-white" fluid>
            <Container id="home" className="h-auto vh-100 p-0" fluid>
                <video autoPlay muted loop src={bgVideo} />
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center position-personalized p-0" fluid>
                    <img src={AssistixAILogo} alt="Logo de assistixAI" height={200} width={200} />
                    <h1 className="py-4 fs-1 fw-bold text-light">ASSITIX AI</h1>
                    <p className="w-50 text-center pb-2 text-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa distinctio eaque explicabo, consequatur quisquam rem? Totam nulla aspernatur odio ipsam eos, maxime facere ullam quasi deleniti nemo illum. Repudiandae?
                    </p>
                    <button className="btn btn-primary my-3">Iniciar sesión</button>
                </Container>
            </Container>
            <PublicNav />
            <Container className="h-auto bg-dark d-flex flex-column justify-content-center align-items-center personalized-padding" fluid id="product">
                <h2 className="text-uppercase text-center w-75 my-3 py-2 fs-2 text-light fw-bold">Gana a tus amigos en las ligas fantasy</h2>
                <Row className="m-0 p-0">
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center" md={6}>
                        <img src={imgPrototype} alt="Mock-ups" width={400} />
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center align-items-center" md={6}>
                        <p className="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum repellat cumque alias rerum amet, aliquam ut libero, totam, eaque veniam placeat facere sapiente necessitatibus? Officiis iure incidunt vel error esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod minus omnis eaque, magni dolorum voluptate ratione. Laborum facilis tempore libero? Natus optio, eligendi amet temporibus dicta porro nam ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente sit dolorum nam aperiam voluptate fugiat architecto, sed voluptas velit excepturi vitae quas pariatur distinctio in harum nobis animi aspernatur. </p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center align-items-center" sm={12}>
                        <button className="btn btn-primary my-3">Comienza a jugar</button>
                    </Col>
                </Row>
            </Container>
            <Container className="h-auto d-flex flex-column justify-content-center align-items-center personalized-padding" fluid id="more-info">
                <h2 className="text-uppercase text-center w-75 my-3 py-2 fs-2 fw-bold">Aprovechate de nuestras ventajas</h2>
                <Row className="m-0 p-0">
                    <Col className="m-0 px-2 p-0 d-flex  flex-column gap-2 align-items-center" sm={4}>
                        <RobotIcon fill="#4EB3A4" width={'200'} height={'200'} />
                        <h3 className="text-center fw-bold">Tecnología lider en predicción</h3>
                        <p className="text-center w-75">
                            Descubre el futuro de las ligas fantasy con nuestra aplicación, impulsada por un revolucionario modelo de inteligencia artificial generativa. Concebido y desarrollado íntegramente por nuestro equipo, este modelo aprovecha la sofisticada arquitectura de transformers, similar a la usada en los más avanzados modelos de lenguaje como GPT-4. Nuestra tecnología te ofrece predicciones de una precisión inigualable en fútbol Fantasy, resultado de un meticuloso proceso de selección de datos y un entrenamiento especializado en entornos dedicados. Este innovador modelo no solo redefine los estándares de precisión en predicciones, sino que te equipa con herramientas decisivas para analizar y superar estratégicamente a tus rivales en cada jornada.
                        </p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex flex-column gap-2 align-items-center" sm={4}>
                        <MultiDeviceIcon fill="#4EB3A4" width={'200'} height={'200'} />
                        <h3 className="text-center fw-bold">Software multiplataforma    </h3>
                        <p className="text-center w-75">Diseñada para ofrecer la misma experiencia de usuario fluida y eficiente en todos los dispositivos. Disponible tanto para iOS como para Android, y accesible a través de cualquier navegador web, garantiza que tengas acceso rápido y fácil a todas las funcionalidades, sin importar dónde te encuentres o qué dispositivo utilices. Optimizada para ser ligera y rápida, nuestra aplicación minimiza los tiempos de carga y maximiza la eficiencia, permitiéndote hacer ajustes rápidos y recibir actualizaciones en tiempo real.</p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex flex-column gap-2 align-items-center" sm={4}>
                        <BrainIcon fill="#4EB3A4" width={'200'} height={'200'} />
                        <h3 className="text-center fw-bold">Chat bot incorporado</h3>
                        <p className="text-center w-75">Diseñado para responder con precisión cualquier pregunta relacionada con ligas fantasy. Equipado con tecnología de procesamiento de lenguaje natural, este asistente utiliza un modelo avanzado optimizado mediante técnicas de fine-tuning específicas para el contexto del fantasy. Ofrece respuestas instantáneas y detalladas sobre jugadores, estadísticas y estrategias, adaptándose perfectamente a las necesidades de cada usuario. Con este poderoso chatbot, recibirás asesoramiento personalizado y podrás tomar decisiones estratégicas que te posicionan un paso adelante de tus competidores en el mundo del fantasy. ¡Es tu aliado perfecto para dominar la liga!</p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center align-items-center" sm={12}>
                        <button className="btn btn-primary mt-4">Únete ya</button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    )
}