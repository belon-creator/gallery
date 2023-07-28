import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainerRef = document.querySelector(".js-gallery");
console.log(galleryContainerRef);
galleryContainerRef.addEventListener("click", onSmallImgClick);

function onSmallImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery__link", {
    captions: true, // Показувати підписи під зображеннями
    captionsData: "alt", // Використовувати атрибут alt для підписів
  });

  // Відкриваємо велике зображення у SimpleLightbox
  lightbox.open();
}

const makePreviewImgMarkup = ({ preview, description, original }) => {
  return `  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
};

const makeGridImages = galleryItems.map(makePreviewImgMarkup).join("");
galleryContainerRef.insertAdjacentHTML("beforeend", makeGridImages);
