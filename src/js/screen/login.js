const loginForm = document.getElementById("loginForm");
const inputId = document.querySelector(".input_id");
const inputPassword = document.querySelector(".input_password");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const id = inputId.value;
  const password = inputPassword.value;

  const existingUser = JSON.parse(localStorage.getItem("newUser"));
  if (existingUser) {
    if (existingUser.id !== id) {
      return alert("아이디가 존재하지 않습니다.");
    } else if (existingUser.password !== password) {
      return alert("비밀번호가 일지하지 않습니다.");
    } else {
      let loginState = {};
      loginState["isLogin"] = true;
      loginState["name"] = existingUser.name;
      loginState["id"] = existingUser.id;
      loginState["password"] = existingUser.password;
      loginState["nickname"] = existingUser.nickname;
      localStorage.setItem("checkInUser", JSON.stringify(loginState));
      const a = document.createElement("a");
      a.href = `./home.html`;
      a.click();
      console.log(loginState);
    }
  } else {
    return alert("아이디가 존재하지 않습니다. 회원가입 해주세요.");
  }
}

export default login;
