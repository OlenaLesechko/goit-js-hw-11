'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const formElement = document.querySelector('.form-search');
const inputElement = document.querySelector('.form-input');
const loadingContainer = document.querySelector('.loading-container');


function showLoader() {
    loader.style.display = 'block';
}
function hideLoader() {
    loader.remove;
}


let requestParams = {
  key: '41575459-699006cd61f4fecce9ea2d52d',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function searchImages(params) {
  requestParams.q = params;
  const searchParams = new URLSearchParams(requestParams);
  showLoader();
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      hideLoader();
      if (!response.ok) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.json();
    })
    .then(({ hits }) => {
      const gallery = document.querySelector('.gallery');
      const lightbox = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        captionsData: 'alt',
        captionDelay: 250, 
        captionPosition: 'bottom',
        close: true,
        enableKeyboard: true, 
        docClose: true,
      });
      const renderImages = hits.reduce(
        (html, image) =>
          html +
          `<li class="gallery-item">
              <a class="image-link" href="${image.largeImageURL}">
              <img class="images" data-source="${image.largeImageURL}" alt="${image.tags}" src="${image.webformatURL}" width="360" height="200">
              </a>
              <div class="information">
              <p>Likes: ${image.likes}</p>
              <p>Views: ${image.views}</p>
              <p>Comments: ${image.comments}</p>
              <p>Downloads: ${image.downloads}</p>
        </div>
      </li>`,
        ''
      );
      gallery.innerHTML = renderImages;

      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    })
  .finally(() => loader.remove)
  
}

formElement.addEventListener('submit', event => {
  event.preventDefault();

  searchImages(inputElement.value);
});