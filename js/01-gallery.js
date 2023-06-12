import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEls = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(
    (galleryItems) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItems.original}">
        <img
          class="gallery__image"
          src="${galleryItems.preview}"
          data-source="${galleryItems.original}"
          alt="${galleryItems.description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryEls.insertAdjacentHTML("beforeend", galleryItemsEl);

galleryEls.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}">
  `);

  instance.show();
}
