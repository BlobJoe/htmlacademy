let darkThemeButton = document.querySelector(".theme-button-dark");
let lightThemeButton = document.querySelector(".theme-button-light");
let serifFontButton = document.querySelector(".font-button-serif");
let sansSerifFontButton = document.querySelector(".font-button-sans-serif");


darkThemeButton.onclick = function () {
    document.body.classList.add("dark");
    lightThemeButton.classList.remove("active");
    darkThemeButton.classList.add("active");
}

lightThemeButton.onclick = function () {
    document.body.classList.remove("dark");
    lightThemeButton.classList.add("active");
    darkThemeButton.classList.remove("active")
}

serifFontButton.onclick = function () {
    document.body.classList.add("serif");
    sansSerifFontButton.classList.remove("active");
    serifFontButton.classList.add("active")
}

sansSerifFontButton.onclick = function () {
    document.body.classList.remove("serif");
    sansSerifFontButton.classList.add("active");
    serifFontButton.classList.remove("active");
}


let blogArticles = document.querySelectorAll(".blog-article"); 

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector(".more");
    moreButton.onclick = function (evt) {
        blogArticle.classList.remove("short");
    }
}

let gridButton = document.querySelector(".card-view-button-grid");
let listButton = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".cards");

gridButton.onclick = function () {
  cardsList.classList.remove("list");
  gridButton.classList.add("active");
  listButton.classList.remove("active");
}

listButton.onclick = function () {
  cardsList.classList.add("list");
  listButton.classList.add("active");
  gridButton.classList.remove("active");
}

let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (let preview of previews) {
  preview.onclick = function (evt) {
    evt.preventDefault();

    let currentActive = document.querySelector(".preview-list .active-item");
    currentActive.classList.remove("active-item");
    preview.classList.add("active-item");

    activePhoto.src = preview.href;
  };
}