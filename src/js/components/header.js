const header = document.querySelector("header");
const header_inner = document.querySelector(".header_inner");
const nav = document.querySelector("header nav");
const headerBg = document.querySelector(".header_bg");
const loginState = document.querySelector(".loginState");

nav?.addEventListener("mouseover", () => {
  headerBg.style = "transform: translateY(0%);";
  header_inner.classList.add("on");
});
nav?.addEventListener("mouseleave", () => {
  headerBg.style = "transform: translateY(-100%);";
  header_inner.classList.remove("on");
});

window.addEventListener("scroll", function (event) {
  let scorllY = this.window.scrollY;
  if (this.scrollY > 150) {
    header.style = "display: none;";
  } else {
    header.style = "display: flex;";
  }
});

if (localStorage.getItem("checkInUser")) {
  const checkedInUser = JSON.parse(localStorage.getItem("checkInUser"));
  loginState.href = `./home.html`;
  loginState.innerHTML = `<i class="fa-solid fa-user"></i>`;
} else {
  loginState.setAttribute("href", "./login.html");
  loginState.innerHTML = `<span>로그인</span>`;
}

export default header;
