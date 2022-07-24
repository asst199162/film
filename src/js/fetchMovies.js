import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export class GetMovieApi {
  constructor() {
    // <<api_key>>
    this.GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
    this.POPULARE_URL = '/3/trending/movie/day';
    this.SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
    this.API_KEY = 'e331122fb787497311a69180baf8c75a';
    this.page = 1;
  }

  async fetchPopularMovie() {
    const { data } = await axios.get(
      `${this.POPULARE_URL}?api_key=${this.API_KEY}`
    );
    const genresResp = await axios.get(
      `${this.GENRES_URL}?api_key=${this.API_KEY}&language=en-US`
    );
    localStorage.setItem('genres', JSON.stringify(genresResp.data.genres));
    localStorage.setItem('searchedMovies', JSON.stringify(data.results));
    return data;
  }

  async fetchSearchedMovie(inputValue) {
    const response = await axios.get(
      `${this.SEARCH_URL}?api_key=${this.API_KEY}&query=${inputValue}&language=en&page=${this.page}`
    );
    localStorage.setItem('searchedMovies', JSON.stringify(response.data.results));
    return response;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
