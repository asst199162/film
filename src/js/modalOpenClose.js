import { GetMovieApi } from './fetchMovies';
import { createMovieCard } from './createModal';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalOpenClose: document.querySelector('.js-modalOpenClose'),
  closeBtn: document.querySelector('[data-modal-close]'),
  modalCard: document.querySelector('.movie-modal'),
};
const getMovieApi = new GetMovieApi();
let movie = null;
let watchedMovie = [];
let queuedMovie = [];

refs.modalOpenClose.addEventListener('click', onModalOpen);

export function onModalOpen(e) {
  e.preventDefault();
  const card = e.target.parentNode;
  const id = card.getAttribute('id');

  movie = JSON.parse(localStorage.getItem('searchedMovies')).find(
    movie => movie.id === Number(id)
  );
  renderMovieCard(movie);
  const btnRefs = {
    addQueue: document.querySelector('.modal-button-queue'),
    addWatched: document.querySelector('.modal-button-watched'),
  };
  btnRefs.addQueue.addEventListener('click', onQueueBtnClick);
  btnRefs.addWatched.addEventListener('click', onBtnWatchedClick);

  refs.backdrop.classList.toggle('is-hidden');
  refs.closeBtn.addEventListener('click', onModalClose);
  refs.backdrop.addEventListener('click', onBackdropClose);
  window.addEventListener('keydown', closeOnKeydown);

  if (
    JSON.parse(localStorage.getItem('watchedCard'))?.find(
      movie => movie.id === Number(id)
    )
  ) {
    btnRefs.addWatched.textContent = 'REMOVE FROM WATCHED';
    btnRefs.addWatched.classList.add('watched');
  }
  if (
    JSON.parse(localStorage.getItem('queuedCard'))?.find(
      movie => movie.id === Number(id)
    )
  ) {
    btnRefs.addQueue.textContent = 'REMOVE FROM QUEUED';
    btnRefs.addQueue.classList.add('queued');
  }
}

function onModalClose() {
  refs.backdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', closeOnKeydown);
  refs.modalCard.innerHTML = '';
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

function onBtnWatchedClick(e) {
  if (!e.target.classList.contains('watched')) {
    if (JSON.parse(localStorage.getItem('watchedCard'))) {
      watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
    }
    watchedMovie.push(movie);
    localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
    e.target.classList.add('watched');
    e.target.textContent = 'REMOVE FROM WATCHED';
    return;
  } else {
    /* (e.target.classList.contains('watched')) */
    watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
    const filterWatchedMovie = watchedMovie.filter(
      item => Number(item.id) !== Number(movie.id)
    );
    watchedMovie = [...filterWatchedMovie];
    localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
    e.target.classList.remove('watched');
    e.target.textContent = 'ADD TO WATCHED';
  }
}

function onQueueBtnClick(e) {
  if (!e.target.classList.contains('queued')) {
    if (JSON.parse(localStorage.getItem('queuedCard'))) {
      watchedMovie = JSON.parse(localStorage.getItem('queuedCard'));
    }
    queuedMovie.push(movie);
    localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
    e.target.classList.add('queued');
    e.target.textContent = 'REMOVE FROM QUEUED';
    return;
  } else {
    /* (e.target.classList.contains('watched')) */
    queuedMovie = JSON.parse(localStorage.getItem('queuedCard'));
    const filterQueuedMovie = queuedMovie.filter(
      item => Number(item.id) !== Number(movie.id)
    );
    queuedMovie = [...filterQueuedMovie];
    localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
    e.target.classList.remove('queued');
    e.target.textContent = 'ADD TO QUEUED';
  }
}
