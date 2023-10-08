import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = (arr) => {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${preview}">
                <img class="gallery__image" src="${original}" alt="${description}" loading="lazy"/>
            </a>
        </li>`
    )
    .join("");
};
list.insertAdjacentHTML("afterbegin", markup(galleryItems));
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  close: false,
  enableKeyboard: true,
});
