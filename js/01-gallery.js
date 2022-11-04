import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsMarkup = createGallery(galleryItems);

function createGallery(items) {
  return items
    .map(
      item =>
        `
      <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
`,
    )
    .join('');
}

gallery.innerHTML = galleryItemsMarkup;

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
`,
    {
      onShow: modal => {
        document.addEventListener('keydown', onPressEsc);
      },
      onClose: modal => {
        document.removeEventListener('keydown', onPressEsc);
      },
    },
  );
  modal.show();

  function onPressEsc(event) {
    if (event.code === 'Escape') {
      modal.close();
    }
  }
}
