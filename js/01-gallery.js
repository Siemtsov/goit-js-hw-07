import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const container = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${preview}">
            <img
              class="gallery__image"
              src="${original}" 
              alt="${description}" 
              data-source="${preview}">
          </a>
        </li>`
    )
    .join("");
}
container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
const imageLink = document.querySelectorAll(".gallery__link");
console.log(imageLink);
imageLink.forEach((item) => item.addEventListener("click", handlerClick));
function handlerClick(evt) {
  evt.preventDefault();
}
