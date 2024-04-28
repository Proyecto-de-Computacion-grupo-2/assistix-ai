import {Col, Container, Row} from "react-bootstrap";
import AssistixAILogo from "../assets/images/assistix-ai-logo.png"

import "../styles/public-page.scss"

import imgPrototype from "../assets/images/AssistixAI.webp"
import {BrainIcon, MultiDeviceIcon, RobotIcon} from "../components/shared-components/icons/icons";
import PublicNav from "../components/public-page/nav-bar";

import bgVideo from "../assets/video/bgVideo.mp4"
import Footer from "../components/public-page/footer";

export default function PublicPage() {
    return (
        <Container className="h-auto p-0 bg-white" fluid>
            <Container id="home" className="h-auto vh-100 p-0" fluid>
                <video autoPlay muted playsInline loop src={bgVideo}/>
                <Container
                    className="h-100 d-flex flex-column justify-content-center align-items-center position-personalized p-0"
                    fluid>
                    <img src={AssistixAILogo} alt="Logo de assistixAI" height={200} width={200}/>
                    <h1 className="py-4 fs-1 fw-bold text-light">ASSITIX AI</h1>
                    <p className="w-50 text-center pb-2 text-light">
                        <span className="span-personalized">Assistix AI</span> es un software desarrollado para
                        facilitar la gestión de equipos fantasy. Este software cuenta con
                        un modelo de <span className="span-personalized">inteligencia artificial</span> que nos permite
                        predecir el rendimiento de los jugadores.
                        Además, cuenta con un <span className="span-personalized">chatbot</span> que nos ayudará a
                        resolver nuestras dudas en tiempo real.
                    </p>
                    <button className="btn btn-primary my-3">Iniciar sesión</button>
                </Container>
            </Container>
            <PublicNav/>
            <Container
                className="h-auto bg-dark d-flex flex-column justify-content-center align-items-center personalized-padding"
                fluid id="product">
                <h2 className="text-uppercase text-center w-75 my-3 py-2 fs-2 text-light fw-bold">Gana a tus amigos en
                    las ligas fantasy</h2>
                <Row className="m-0 p-0">
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center" md={6}>
                        <img src={imgPrototype} alt="Mock-ups" width={400}/>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center align-items-center" md={6}>
                        <p className="text-light w-75 ">
                            Ganar a tus amigos nunca fue tan fácil. Con <span
                            className="span-personalized">Assistix AI</span> podrás predecir el rendimiento de los
                            jugadores de tu equipo fantasy
                            y así poder tomar decisiones más acertadas. Además, nuestro chatbot te ayudará a resolver
                            tus dudas en tiempo real. Gracias a nuestros modelos de
                            inteligencia artificial, podrás tener una ventaja competitiva sobre tus amigos. ¡No esperes
                            más y únete a <span className="span-personalized">Assistix AI</span>!
                        </p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center align-items-center" sm={12}>
                        <button className="btn btn-primary my-3">Comienza a jugar</button>
                    </Col>
                </Row>
            </Container>
            <Container
                className="h-auto d-flex flex-column justify-content-center align-items-center personalized-padding"
                fluid id="more-info">
                <h2 className="text-uppercase text-center w-75 my-3 py-2 fs-2 fw-bold">Aprovechate de nuestras
                    ventajas</h2>
                <Row className="m-0 p-0">
                    <Col className="m-0 px-2 p-0 d-flex  flex-column gap-2 align-items-center" sm={4}>
                        <RobotIcon fill="#4EB3A4" width={'200'} height={'200'}/>
                        <h3 className="text-center fw-bold">Tecnología lider en predicción</h3>
                        <p className="text-center w-75">
                            Descubre el futuro de las ligas fantasy con nuestra app, impulsada por un modelo de IA
                            generativa. Desarrollado por nuestro equipo, aprovecha la arquitectura de transformers,
                            similar a la de GPT-4. Ofrece predicciones precisas en fútbol Fantasy, resultado de un
                            meticuloso proceso de selección de datos y entrenamiento especializado.
                        </p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex flex-column gap-2 align-items-center" sm={4}>
                        <MultiDeviceIcon fill="#4EB3A4" width={'200'} height={'200'}/>
                        <h3 className="text-center fw-bold">Software multiplataforma </h3>
                        <p className="text-center w-75">
                            Ofrece la misma experiencia fluida en todos los dispositivos. Disponible para iOS y Android,
                            y en cualquier navegador web, garantiza acceso rápido y fácil a todas las funcionalidades.
                            Optimizada para ser ligera y rápida, minimiza los tiempos de carga y maximiza la eficiencia,
                            permitiendo ajustes rápidos y actualizaciones en tiempo real.
                        </p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex flex-column gap-2 align-items-center" sm={4}>
                        <BrainIcon fill="#4EB3A4" width={'200'} height={'200'}/>
                        <h3 className="text-center fw-bold">Chat bot incorporado</h3>
                        <p className="text-center w-75">
                            Responde con precisión preguntas sobre ligas fantasy. Equipado con tecnología de
                            procesamiento de lenguaje natural, este asistente utiliza un modelo avanzado. Ofrece
                            respuestas instantáneas y detalladas, adaptándose a las necesidades de cada usuario. Recibe
                            asesoramiento personalizado y toma decisiones estratégicas para dominar la liga.
                        </p>
                    </Col>
                    <Col className="m-0 px-2 p-0 d-flex justify-content-center align-items-center" sm={12}>
                        <button className="btn btn-primary mt-4">Únete ya</button>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Container>
    )
}