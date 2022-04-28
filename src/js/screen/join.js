import { NewUser } from "../index";

const toLogin = document.querySelector(".login");
const joinForm = document.querySelector(".join_form");
const inputName = document.getElementById("join_name");
const inputId = document.getElementById("join_id");
const inputPassword = document.getElementById("join_password");
const inputPasswordCheck = document.getElementById("join_password_check");
const inputNickname = document.getElementById("join_nickname");
const joinBtn = document.querySelector(".join_button");

joinForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (inputName.value.length < 2) {
    return alert("이름이 너무 짧습니다.");
  } else if (inputId.value.length < 4) {
    return alert("아이디는 최소 4자리입니다.");
  } else if (inputPassword.value.length < 8) {
    return alert("비밀번호가 너무 짧습니다.");
  } else if (inputPassword.value !== inputPasswordCheck.value) {
    return alert("비밀번호가 맞지 않습니다.");
  } else if (inputNickname.value.length < 2) {
    return alert("닉네임은 최소 2자리입니다.");
  }
  const name = inputName.value;
  const id = inputId.value;
  const password = inputPassword.value;
  const nickname = inputNickname.value;

  const newUser = new NewUser(name);
  newUser.id = id;
  newUser.password = password;
  newUser.nickname = nickname;

  localStorage.setItem("newUser", JSON.stringify(newUser));
  const a = document.createElement("a");
  a.href = `./login.html`;
  a.click();
} // function handleSubmit()

export default join;
