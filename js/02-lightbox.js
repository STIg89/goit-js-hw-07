import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsMarkup = createGallery(galleryItems);

function createGallery(items) {
  return items
    .map(
      item =>
        `
          <a class="gallery__item" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              alt="${item.description}"
            />
          </a>
          `,
    )
    .join('');
}

gallery.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
