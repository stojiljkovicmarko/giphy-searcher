import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Spinner from "../Spinner/Spinner";
import SearchBar from "../SearchBar/SearchBar";

import GifService from "../../services/GifService";

import "./GifDisplay.css";


function GifDisplay() {

    const [trendingGifs, setTrendingGifs] = useState([]);
    const [searchedGifs, setSearchedGifs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const loadTrendingGifs = () => {
        GifService.getTrendingGifs()
            .then(gifs => setTrendingGifs(gifs))
            .finally(setIsLoading(false));

    }

    const loadSearchedGifs = () => {
        GifService.getSearchedGifs(searchText)
            .then(gifs => setSearchedGifs(gifs));

    }

    useEffect(() => {
        loadTrendingGifs();
    }, [])


    if (isLoading) {
        return <Spinner />
    }


    return (
        <Container>
            <SearchBar loadSearchedGifs={loadSearchedGifs} searchText={searchText} setSearchText={setSearchText} />
            <div className="gif-wrapper">
                {searchText ? (searchedGifs.filter(gif => gif.title.toLowerCase().includes(searchText.trim()))
                    .map(gif => {
                        return (
                            <div key={gif.id}>
                                <a href={gif.url}>
                                    <img src={gif.images.fixed_height.url}
                                        className="image" alt={gif.title} />
                                </a>
                            </div>
                        );
                    })) : (trendingGifs.map(gif => {
                        return (
                            <div key={gif.id}>
                                <a href={gif.url}>
                                    <img src={gif.images.fixed_height.url}
                                        className="image" alt={gif.title} />
                                </a>
                            </div>
                        );
                    }))}
            </div>
        </Container>
    );

}

export default GifDisplay;