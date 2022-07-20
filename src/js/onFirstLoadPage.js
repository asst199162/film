import { gallery } from './references';
import { GetMovieApi } from './onFirstLoad';
const getMovieApi = new GetMovieApi();
// const gallery = document.querySelector('[data-gallery]');


window.addEventListener('DOMContentLoaded', onFirstLoadPage);


async function onFirstLoadPage(event) {
try {
    const {results} = await  getMovieApi.fetchMovie();
    renderMovieCard(results);
   }
  catch(error){console.log(error.message)}
  
}

function createMovieCard(movie) {
    return movie.map(({
        poster_path,
        title,
        genre_ids,
        release_date,
    }) => 
        `<li class="gallery__item">
      <a class="gallery__link" href="">
        <img
          class="gallery__img"
          src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt=${title}
        />
        <p class="gallery__name">${title}</p>
        <p class="gallery__information">${genre_ids} | ${release_date}</p>
      </a>
    </li>` ).join("");
    
};

function renderMovieCard(movie) {
   gallery.insertAdjacentHTML("beforeend", createMovieCard(movie));
}

