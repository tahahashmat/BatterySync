var username;
var password;

document.getElementById("loginButton").addEventListener("click", storeLoginDetailToLocalStorage);

function getUsername(){
  return document.getElementById('username').value;
}

function getPassword(){
  return document.getElementById('password').value;
}

function storeLoginDetailToLocalStorage(){
  console.log("LOCAL STORAGE :")
  console.log(localStorage.getItem('USERNAME'));
  console.log(localStorage.getItem('PASSWORD'));
  username = getUsername();
  password = getPassword();
  console.log("Username: " + username);
  console.log("Password: " + password);
  localStorage.setItem('USERNAME', username);
  localStorage.setItem('PASSWORD', password);
}
