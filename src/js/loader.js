const loader = document.querySelector('.loader-overlay');

function loaderShow() {
  loader.classList.add('is-open');
}

function hideLoader() {
  loader.classList.remove('is-open');
}

export { loaderShow, hideLoader };
