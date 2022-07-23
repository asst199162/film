import { getGenre } from './genresOfMovies';

export function createMovieCard(movie) {
  const { poster_path, title, genre_ids, popularity, vote_average, vote_count, overview, id } = movie;
  const titleUp = title.toUpperCase();
  return ` <div class="movie-card__item">
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="movie-card__poster" />
    </div>
    <div class="movie-card__item">
      <h1 class="movie-card__title"> ${titleUp} </h1>
      <ul class="movie-card__info">
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Vote / Votes </h2>
          <p class="movie-card__content--item"><span class="movie-card__vote"> ${vote_average} </span> / ${vote_count} </p>
        </li>
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Popularity </h2>
          <p class="movie-card__content--item"> ${popularity} </p>
        </li>
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Movie Title </h2>
          <p class="movie-card__content--item"> ${titleUp} </p>
        </li>
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Genre </h2>
          <p class="movie-card__content--item"> ${getGenre(genre_ids)} </p>
      </ul>
      <h2 class="movie-card__about">About</h2>
      <p class="movie-card__about--content"> ${overview} </p>
      <div class="button-wrapper">
      <button type="button" class="modal-button modal-button-watched">Add to watched</button>
      <button type="button" class="modal-button modal-button-queue">Add to queue</button>
      </div>
    </div>`;
}
