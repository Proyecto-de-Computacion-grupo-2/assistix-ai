import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function LeagueMatches() {

    console.log()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widgets.api-sports.io/2.0.3/widgets.js";
        script.type = "module";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    // {import.meta.env.VITE_API_FOOTBALL_KEY}

    return (
        <Container className="flex-grow-1 p-0 m-0" fluid>
            <div id="wg-api-football-games" data-host="v3.football.api-sports.io" data-key=""
                data-date="" data-league="" data-season="" data-theme="" data-refresh="0" data-show-toolbar="true"
                data-show-errors="false" data-show-logos="true" data-modal-game="true" data-modal-standings="true"
                data-modal-show-logos="true">
            </div>
            <script type="module" src="https://widgets.api-sports.io/2.0.3/widgets.js">
            </script>
        </Container>
    )
}