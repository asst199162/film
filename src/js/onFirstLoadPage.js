import { paginationHome } from './references';
import { GetMovieApi } from './fetchMovies';
import { renderMovieCard } from './createGallery';
import { renderNumerationOfHome } from './createNumeration';

const getMovieApi = new GetMovieApi();

window.addEventListener('DOMContentLoaded', onFirstLoadPage);

export async function onFirstLoadPage(event) {
  try {
    const data = await getMovieApi.fetchPopularMovie();
    renderMovieCard(data.results);
    renderNumerationOfHome(data.total_pages, data.page);
  } catch (error) {
    console.error(error.message);
  }
}
