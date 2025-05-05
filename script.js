function login(){
const username = document.getElementById("username").value.trim();

const message = document.getElementById("login-message");
const regex = /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/;

  if (regex.test(username)) {
    message.style.color = "green";
    message.textContent = `Welcome, ${username}!`;
    localStorage.setItem("username", username);

} else{
    message.style.color = "red";
    message.textContent = "Invalid username. Use letters, numbers, and one hyphen (not at start or end).";
  }
}