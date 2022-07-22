import { getGenre } from './genresOfMovies';

export function createMovieCard(movies) {
  return movies
    .map(({ poster_path, title, genre_ids, release_date }) => {
      const releaseDate = release_date.slice(0, 4);
      return `<li class="gallery__item">
      <a class="gallery__link" href="">
        <img
          class="gallery__img"
          src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt=${title}
        />
        <p class="gallery__name">${title}</p>
        <p class="gallery__information">${getGenre(
          genre_ids
        )} | ${releaseDate}</p>
      </a>
    </li>`;
    })
    .join('');
}
