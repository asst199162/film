const genres = JSON.parse(localStorage.getItem('genres'));

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
