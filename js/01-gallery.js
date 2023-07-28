import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".js-gallery");

galleryContainerRef.addEventListener("click", onSmallImgClick);

function onSmallImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const originalImageURL = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImageURL}" width="800" height="600">
  `);

  instance.show();
}

const makePreviewImgMarkup = ({ preview, description, original }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
};

const makeGridImages = galleryItems.map(makePreviewImgMarkup).join("");
galleryContainerRef.insertAdjacentHTML("beforeend", makeGridImages);
