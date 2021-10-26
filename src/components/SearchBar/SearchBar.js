
import { Container } from "react-bootstrap";

import "./SearchBar.css";

function SearchBar({ searchText, setSearchText, loadSearchedGifs }) {


    const searchHandler = (e) => {
        setSearchText(e.target.value);
        loadSearchedGifs();
    }

    // SEARCH ONLU ON ENTER ???
    // const onEnterHandler = (e) => {
    //     if(e.key === "Enter") {
    //         console.log("pressed enter: ", e.target.value);
    //         setSearchText(e.target.value);
            
    //     }
    // }

    return (
        <Container className="search-wrapper d-flex justify-content-center mb-2 p-0">

            <input type="search" className="input-field p-2"
                onChange={searchHandler}
                value={searchText}
                placeholder="search"
            />
            <a href="something">
                <div className="search-icon d-flex justify-content-center align-items-center"> &#x1F50D; </div>
            </a>

        </Container>
    );
}

export default SearchBar;