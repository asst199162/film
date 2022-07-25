import { paginationHome } from './references';
import {
  isFetchPopularMovie,
  isFetchSearchedMovie,
  GetMovieApi,
} from './fetchMovies';
import { inputValue } from './onSubmitClick';
import { renderMovieCard } from './createGallery';
import { renderNumerationOfHome } from './createNumeration';

getMovieApi = new GetMovieApi();

paginationHome.addEventListener('click', onPageNumberClick);

export function onPageNumberClick(event) {
  checkFetchPopularMovie(event);
  checkFetchSearchedMovie(event);
}

function checkFetchPopularMovie(event) {
  if (isFetchPopularMovie) {
    // if (event.target.classList.contains('numb')) {
    popularMoviesAndRender(event);
    // }
  }
}

function checkFetchSearchedMovie(event) {
  if (isFetchSearchedMovie) {
    // if (event.target.classList.contains('numb')) {
    searchMoviesAndRender(event, inputValue);
    // }
  }
}

async function searchMoviesAndRender(event, inputValue) {
  try {
    getMovieApi.setPage(event.target.dataset.page);
    const data = await getMovieApi.fetchSearchedMovie(inputValue);
    renderMovieCard(data.results);
    renderNumerationOfHome(data.total_pages, data.page);
  } catch (error) {
    console.error(error);
  }
}
async function popularMoviesAndRender(event) {
  try {
    getMovieApi.setPage(event.target.dataset.page);
    const data = await getMovieApi.fetchPopularMovie();
    renderMovieCard(data.results);
    renderNumerationOfHome(data.total_pages, data.page);
  } catch (error) {
    console.error(error);
  }
}
