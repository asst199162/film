import axios from 'axios';

const refs = {
  searchBtn: document.querySelector('.form'),
  input: document.querySelector('.form__input'),
  gallery: document.querySelector('.gallery'),
  success: document.querySelector('.alert'),
};

let inputValue = '';

refs.searchBtn.addEventListener('submit', onSearchItems);

//Получение данных с инпута
async function onSearchItems(e) {
  e.preventDefault();
  // clearMarkup();

  inputValue = refs.input.value.trim();
  console.log(inputValue);

  resetPage();

  // Проверка инпута на пустую строку

  if (inputValue === '') {
    refs.success.classList.add('visible');
    return;
  } else {
    refs.success.classList.remove('visible');
  }
  try {
    const response = await fetchMovie(inputValue);
    console.log(response);
    if (response.data.results.length === 0) {
      refs.success.classList.add('visible');
    }
    clearInput();
  } catch (error) {
    console.log(error);
  }
}

// Запрос на API

const API_KEY = '35e417e69f137291206951efd172c8b1';
let DEFAULT_PAGE = 1;

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

async function fetchMovie(inputValue) {
  const URL = `${BASE_URL}?api_key=${API_KEY}&query='${inputValue}'&language=ru&page=${DEFAULT_PAGE}`;
  const response = await axios.get(URL);

  // DEFAULT_PAGE += 1;

  return response.data.results;
}

function resetPage() {
  return (DEFAULT_PAGE = 1);
}

// function clearMarkup() {
//   refs.gallery.innerHTML = '';
// }
function clearInput() {
  refs.searchBtn.reset();
}

export { fetchMovie };
