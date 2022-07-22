import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export class GetMovieApi {
  constructor() {
    this.POPULARE_URL = '/3/trending/movie/day?';
    this.API_KEY = 'api_key=e331122fb787497311a69180baf8c75a';
    this.page = 1;
  }

  async fetchPopularMovie() {
    const { data } = await axios.get(`${this.POPULARE_URL}${this.API_KEY}`);
    return data;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
