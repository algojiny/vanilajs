const nav = document.querySelector("header nav");
const headerBg = document.querySelector(".header_bg");

nav.addEventListener("mouseover", () => {
  headerBg.style = "transform: translateY(0%);";
});
nav.addEventListener("mouseleave", () => {
  headerBg.style = "transform: translateY(-100%);";
});
