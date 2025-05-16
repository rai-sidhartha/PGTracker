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
.progress-section {
  margin: 2rem 0;
  text-align: center;
}

.progress-bar {
  width: 100%;
  max-width: 400px;
  height: 20px;
  background-color: #eee;
  border-radius: 10px;
  margin: auto;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0%;
  background-color: #4caf50;
  transition: width 0.4s ease;
}
