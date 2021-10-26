import { Container } from "react-bootstrap";

import "./Header.css";

function Header() {

    return (

        <Container>
            {/* <iframe src="https://giphy.com/embed/3o6gbbuLW76jkt8vIc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
            <h1 className="text-center p-3"> Giphy searcher </h1>
        </Container>

    );

}

export default Header;