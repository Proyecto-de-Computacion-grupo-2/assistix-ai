import {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import iaImage from "../../../assets/images/integrated-ai-logo.png";

export default function MoreInfoAI() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container
            className="rounded-4 py-3 px-4 mb-5 d-flex flex-column justify-content-center align-items-center w-75 integrated-ai-color"
            fluid>
            <img src={iaImage} alt="logo" className="rounded m-0 p-0 w-100 h-auto"/>
            <p className="fs-6 fw-bold my-2 text-center text-black">IA Integrada</p>
            <Button variant="dark" onClick={handleShow} className='fw-bold'>
                Saber más
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inteligencia Artificial Integrada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Nuestra aplicación hace uso de nuestro último modelo de inteligencia artificial generativa.
                    Diseñado de forma completamente interna desde cero para maximizar la precisión en las ligas
                    fantasy, este modelo propietario de última generación marca un hito significativo comparado con
                    las técnicas de aprendizaje automático tradicionales como regresión lineal o K-NN.<br/><br/>

                    Este revolucionario modelo de IA, con más de 100 millones de parámetros, se basa en la avanzada
                    arquitectura de transformers, la misma tecnología que impulsa los grandes modelos de lenguaje
                    más avanzados conocidos hasta la fecha como GPT-4 o Claude, ofreciendo una precisión sin
                    precedentes en la predicción de datos de fútbol Fantasy. A través de un enfoque cuidado en la
                    selección de datos y uso de entornos de entrenamiento desarrollados únicamente para esta tarea,
                    hemos conseguido establecer un nuevo estándar de referencia en el sector, posicionando nuestra
                    solución en la cima de las capacidades predictivas actuales.<br/><br/>

                    Este avance no es solo un gran paso adelante en la precisión y fiabilidad de las predicciones
                    que ofrecemos a nuestros usuarios, sino también nos permite colaborar en construir modelos más
                    poderosos, capaces y seguros. Con el objetivo final de contribuir al desarrollo de la
                    inteligencia artificial general para beneficiar a toda la humanidad.<br/><br/>

                    ¿Qué significa esto para ti?<br/><br/>

                    Predicciones más precisas: Nuestro modelo está entrenado con la tecnología más avanzada, la
                    misma que impulsa los mejores modelos de procesamiento del lenguaje natural.<br/><br/>
                    Información más confiable: Toma decisiones más inteligentes con datos que te ayudarán a
                    ganar.<br/><br/>
                    Análisis más profundos: Descubre las claves del juego y las tendencias que te darán ventaja
                    sobre tus rivales.<br/><br/>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
