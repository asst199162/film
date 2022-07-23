import { GetMovieApi } from './fetchMovies';
import { createMovieCard } from './createModal';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalOpenClose: document.querySelector('.js-modalOpenClose'),
  closeBtn: document.querySelector('[data-modal-close]'),
  modalCard: document.querySelector('.movie-modal'),
};
const getMovieApi = new GetMovieApi();

refs.modalOpenClose.addEventListener('click', onModalOpen);

export async function onModalOpen(e) {
  e.preventDefault();
  // if (e.target.parentNode.classList.contains('.gallery__item')) { return; }
  const card = e.target.parentNode;
  const id = card.getAttribute('id');
  try {
    const response = await getMovieApi.fetchPopularMovie();
    let movie = response.results.find(movie => movie.id === Number(id));
    renderMovieCard(movie);
  } catch (error) {
    console.log(error.message);
  }
  refs.backdrop.classList.toggle('is-hidden');
  refs.closeBtn.addEventListener('click', onModalClose);
  refs.backdrop.addEventListener('click', onBackdropClose);
  window.addEventListener('keydown', closeOnKeydown);
}

function onModalClose() {
  refs.backdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', closeOnKeydown);
}

function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
}
function closeOnKeydown(e) {
  if (e.code === 'Escape') {
    onModalClose();
  }
}

function renderMovieCard(movie) {
  refs.modalCard.innerHTML = createMovieCard(movie);
}
