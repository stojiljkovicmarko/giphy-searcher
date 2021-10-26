import { API_KEY } from "../constants/constants";

export default class GifService {

    static getTrendingGifs() {

        const url = "https://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();
            })
            .then(data => {
                console.log("trending: ",data.data);
                return data.data;
            });

    }

    static getSearchedGifs(searchTerm) {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`;

        return fetch(url)
            .then(response => {
                
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();
            })
            .then(data => {
                //console.log("response length: " + data.data.length);
                //console.log("all: ", data.data);
                return data.data;
            });

    }

}