
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const logoutForm = document.getElementById("logout-form");
const greeting = logoutForm.querySelector("h1");
function onLoginSubmit(event) {
  event.preventDefault();
  
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  display();
}
function onLogoutSubmit(event){
  event.preventDefault();

  localStorage.removeItem(USERNAME_KEY);
  display();
}
function paintGreetings(username) {
  greeting.innerHTML = `Hello <u>${username}</u>!`;
}

function display(){
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if(savedUsername){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
  }else{
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  }
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutSubmit);
display();