const menu = document.getElementsByClassName("accordion");

for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
