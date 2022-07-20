import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e331122fb787497311a69180baf8c75a';



export class GetMovieApi {
    constructor() {
        this.page = 1;
     }

    async fetchMovie() {
        const { data } = await axios.get("");
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