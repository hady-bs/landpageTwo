let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  document.querySelector("nav").style.right = 0;
});
let back = document.querySelector(".back");
back.onclick = () => {
  document.querySelector("nav").style.right = "-100%";
};
