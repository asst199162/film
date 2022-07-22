import { gallery } from './references';
import { GetMovieApi } from './fetchMovies';
import { createMovieCard } from './createGallery';

const getMovieApi = new GetMovieApi();

window.addEventListener('DOMContentLoaded', onFirstLoadPage);

export async function onFirstLoadPage(event) {
  try {
    const { results } = await getMovieApi.fetchPopularMovie();
    renderMovieCard(results);
  } catch (error) {
    console.log(error.message);
  }
}

function renderMovieCard(movies) {
  gallery.insertAdjacentHTML('beforeend', createMovieCard(movies));
}
