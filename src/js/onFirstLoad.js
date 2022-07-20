import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = `e331122fb787497311a69180baf8c75a`;
const POPULARE_URL = `/3/trending/movie/day?api_key=`;


export class GetMovieApi {
    constructor() {
        this.page = 1;
     }

    async fetchMovie() {
        const { data } = await axios.get(`${POPULARE_URL}${API_KEY}`);
        this.incrementPage();
        return data;
       
    }

    incrementPage() {
        this.page += 1
    }
    resetPage() {
        this.page=1
    }
}