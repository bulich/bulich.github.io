var menu = document.querySelector(".menu-icon");
var header = document.querySelector(".main-header")

menu.addEventListener("click", function(evt){
  evt.preventDefault();
  header.style.display = "flex";
  header.classList.toggle("menu-active");
})