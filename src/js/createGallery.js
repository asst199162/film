import { getGenre } from './genresOfMovies';
export function createMovieCard(movies) {
  return movies.map(({ poster_path, title, genre_ids, release_date, id }) => {
    const releaseDate = release_date.slice(0, 4);
    const titleUp = title.toUpperCase();
    return `<li class="gallery__item" id="${id}"> 
      <img class="gallery__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt=${title} /> 
        <p class="gallery__name">${titleUp}</p> 
        <p class="gallery__information">${getGenre(genre_ids)} | ${releaseDate}</p> 
    </li>`;
  }).join('');
} 