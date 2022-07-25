import { paginationHome } from './references';
import {
  isFetchPopularMovie,
  isFetchSearchedMovie,
  GetMovieApi,
} from './fetchMovies';
import { inputValue } from './onSubmitClick';
getMovieApi = new GetMovieApi();

paginationHome.addEventListener('click', onPageNumberClick);
export function onPageNumberClick(event) {
  if (isFetchSearchedMovie) {
    if (event.target.classList.contains('numb')) {
      console.log(event.target.dataset.page, event.target.dataset.totalpages);
      getMovieApi.setPage(event.target.dataset.page);
      // SearchMovies(inputValue);
    }
  }
}
// async function SearchMovies(inputValue) {
//   try {
//     getMovieApi.

//   } catch (error) {

//   }
// }
