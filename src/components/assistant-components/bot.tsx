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
                <Container className='d-flex justify-content-center align-items-center m-0 p-0 w-100 h-100 bg-white rounded-4'>
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
                  'botId': '436fa3fb-f602-46e2-9690-e62622e7fd0b',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '436fa3fb-f602-46e2-9690-e62622e7fd0b',
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
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
