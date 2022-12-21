let filter = document.querySelector(".filter");
filter.addEventListener("click", myFunction);
function myFunction() {
  var element = document.querySelector(".dropdown-totaal");
  element.classList.toggle("dropdown-totaal-zichtbaar");
  var element = document.querySelector(".filter-svg");
  element.classList.toggle("filter-svg-active");
  var element = document.querySelector(".button-pas-toe");
  element.classList.toggle("button-pas-toe-zichtbaar");
}
function myFunctionCategoriën() {
  document.getElementById("myDropdown-categoriën").classList.toggle("show");
}
function myFunctionDuur() {
  document.getElementById("myDropdown-duur").classList.toggle("show");
}

function myFunctionNiveau() {
  document.getElementById("myDropdown-niveau").classList.toggle("show");
}
