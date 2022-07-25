import { form } from './references';
import { noSuccess } from './references';
import { paginationHome } from './references';
import { renderMovieCard } from './createGallery';
import { GetMovieApi } from './fetchMovies';
import { renderNumerationOfHome } from './createNumeration';

const getMovieApi = new GetMovieApi();
export let inputValue = '';

form.addEventListener('submit', onSubmitClick);

//Получение данных с инпута
export function onSubmitClick(e) {
  e.preventDefault();
  inputValue = e.target.elements.text.value.trim();
  // Проверка инпута на пустую строку
  if (inputValue === '') {
    noSuccess.classList.add('visible');
    return;
  } else {
    noSuccess.classList.remove('visible');
  }
  // Search movies
  searchMoviesAndRender(inputValue);
  clearInput();
}

async function searchMoviesAndRender(inputValue) {
  try {
    getMovieApi.resetPage();
    const data = await getMovieApi.fetchSearchedMovie(inputValue);
    if (data.results.length === 0) {
      noSuccess.classList.add('visible');
    }
    // Render gallery
    renderMovieCard(data.results);
    renderNumerationOfHome(data.total_pages, data.page);
  } catch (error) {
    console.error(error);
  }
}

function clearInput() {
  form.reset();
}
