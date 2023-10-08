import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const container = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
          <a class="gallery__link" href="${preview}">
            <img
              class="gallery__image"
              src="${original}" 
              alt="${description}" 
              data-source="${preview}"
              loading="lazy">
          </a>
        </li>`
  )
  .join("");
container.insertAdjacentHTML("afterbegin", markup);
container.addEventListener("click", handlerClick);
function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const galerySource = evt.target.dataset.source;
  const product = galleryItems.find(({ preview }) => preview === galerySource);
  const instance = basicLightbox.create(
    `<img src="${product.preview}" alt="${product.description}">`
  );
  instance.show();
}
