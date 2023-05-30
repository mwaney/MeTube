const ham = document.querySelector(".left_icon");
const sideBar = document.querySelector(".menu_items");
const container = document.querySelector(".container");

ham.onclick = function () {
  sideBar.classList.toggle("collapsed");
  container.classList.toggle("container_large");
};
