import axios from 'axios';

const refs = {
  searchBtn: document.querySelector('.form'),
  input: document.querySelector('.form__input'),
  gallery: document.querySelector('.gallery'),
  success: document.querySelector('.alert'),
};

let inputValue = '';

refs.searchBtn.addEventListener('submit', onSearchItems);

function onSearchItems(e) {
  e.preventDefault();
  clearMarkup()
  clearInput();
  inputValue = refs.input.value.trim();

  if (inputValue === '' ) {
    refs.success.classList.add("visible")
}
else{
    clearMarkup()
}
  fetchMovie(inputValue);
  //   resetPage();
}

const API_KEY = '35e417e69f137291206951efd172c8b1';
let PAGE = 1;

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

async function fetchMovie(inputValue) {
  const URL = `${BASE_URL}?api_key=${API_KEY}&query='${inputValue}'&language=en-US&page=${PAGE}`;
  const response = await axios.get(URL);

  PAGE += 1;
  console.log(response);
  return response;
}

function clearMarkup() {
  refs.gallery.innerHTML = '';
}
function clearInput() {
  refs.searchBtn.reset();
}
// function resetPage() {
//   return (DEFAULT_PAGE = 1);
// }

// async function onFormSubmit(e) {
//   e.preventDefault();
//   loadMoreButton.classList.remove('hide');
//   clearMarkup();
//   inputValue = form.elements.searchQuery.value.trim();
//   resetPage();

//   console.log(inputValue);
//   if (inputValue === '') {
//     Notify.info('"Please make an inquiry"');
//     return;
//   }
//   try {
//     const response = await fetchPhoto(inputValue);
//     if (response.data.hits.length !== 0) {
//       console.log(response.data.hits);

//       Notify.success(`We found ${response.data.totalHits}images`);

//       const createMarkup = response.data.hits.map(createCardsMarkup).join('');
//       cards.insertAdjacentHTML('beforeend', createMarkup);
//       loadMoreButton.classList.add('hide');
//       lightbox.refresh();
//     } else {
//       Notify.failure(
//         '"Sorry, there are no images matching your search query. Please try again."'
//       );
//       loadMoreButton.classList.remove('hide');
//     }
//     clearInput();
//   } catch (error) {
//     console.log(error);
//   }
// }
export { fetchMovie };
