const electron = require('electron');
const ipc = electron.ipcRenderer

var email;
var password;

document.getElementById("loginButton").addEventListener("click", login);
document.getElementById("loginButton").addEventListener("click", storeLoginDetailToLocalStorage);
// document.getElementById("loginButton").addEventListener("click", function(){
//   ipc.send('open-error-dialog')
// });

function getEmail(){
  return document.getElementById('email').value;
}

function getPassword(){
  return document.getElementById('password').value;
}

function storeLoginDetailToLocalStorage(){
  console.log("LOCAL STORAGE :")
  console.log(localStorage.getItem('EMAIL'));
  console.log(localStorage.getItem('PASSWORD'));
  email = getEmail();
  password = getPassword();
  console.log("Email: " + email);
  console.log("Password: " + password);
  localStorage.setItem('EMAIL', email);
  localStorage.setItem('PASSWORD', password);
}

function login(){
  email = getEmail();
  password = getPassword();
  if(email == "1" && password == "1"){
    //firebase shit
    showSettingsWindow();
    console.log("Login succesful")
  }
  else{
    console.log("Wrong email or password");
    if(document.getElementById("error-text") == null){
      var para = document.createElement("p");
      para.setAttribute("id", "error-text");
      var node = document.createTextNode("Wrong Email or Password!");
      para.appendChild(node);
      var element = document.getElementById("login-button-div")
      var child = document.getElementById("loginButton");
      element.insertBefore(para, child);
    }
  }
}

function showSettingsWindow(){
  ipc.send('show-settings-window')
} 

//Settings window 
// var settingsWindow = new BrowserWindow({
//   width: 200,
//   height: 200,
//   show: false
// });

// settingsWindow.loadFile('settings.html');

// ipc.on('show-settingsWindow', function(){
//   settingsWindow.show();
// })