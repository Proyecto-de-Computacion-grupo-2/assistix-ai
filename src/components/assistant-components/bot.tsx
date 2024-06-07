import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function Chatbot() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Container className='m-0 p-0 rounded-4' fluid>
            {loading && (
                <Container className='d-flex justify-content-center align-items-center m-0 p-0 w-100 h-100 bg-white rounded-4' fluid>
                    <div className='d-flex'>
                        <h3>Loading chatbot</h3>
                        <Spinner animation="border" role="status" className='ms-2'></Spinner>
                    </div>
                </Container>
            )}
            <iframe
                    srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Haz tu preguntas sobre la liga fantasy...',
                  'botConversationDescription': 'Inteligencia artificial especializada en ligas fantasy.',
                  'botName': 'Assistix AI',
                  'botId': '4463bf61-2779-4f06-ae49-f5d97dcc35e2',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '4463bf61-2779-4f06-ae49-f5d97dcc35e2',
                  'enableConversationDeletion': true,
                  'showPoweredBy': false,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': false,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
                    width="100%"
                    height="100%"
                    style={{ display: loading ? 'none' : 'block' }}
            >
            </iframe>
        </Container>
    )
}
