const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export function getGenre(genresIds) {
  const genresNames = getGenresNames(genres, genresIds);
  if (genresNames.length > 3) {
    const filteredNames = filteredGenresNames(genresNames);
    filteredNames.push('Other');
    return filteredNames.join(', ');
  }
  return genresNames.join(', ');
}

function getGenresNames(genres, genresIds) {
  return genres
    .filter(genre => genresIds.includes(genre.id))
    .map(obj => obj.name);
}

function filteredGenresNames(genresNames) {
  return (filteredGenres = genresNames.filter((el, ind) => {
    if (ind < 2) {
      return true;
    }
  }));
}
