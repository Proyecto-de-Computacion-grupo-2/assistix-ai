export default function Chatbot() {

    return (
        <iframe className='m-0 p-0 rounded-4'
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
        >
        </iframe>
    )
}
