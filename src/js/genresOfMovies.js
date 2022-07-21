import axios from 'axios';

async function fetchGenres() {
  const {
    data: { genres },
  } = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=e331122fb787497311a69180baf8c75a'
  );
  return genres;
}
export async function getGenre(genreId) {
  try {
    const genres = await fetchGenres();
    console.log(genres);
    const genre = genres.find(genre => genre.id === genreId);
    console.log(genre);
    return genre.name;
  } catch (error) {
    console.error(error);
  }
}

// async function name(params) {
//   const genreName = await getGenre(18);
//   console.log(genreName);
// }
// name();