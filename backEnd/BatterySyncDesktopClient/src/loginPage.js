const electron = require('electron');
const ipc = electron.ipcRenderer

//firebase shit
var firebase = require("firebase/app");
const { registerVersion } = require('firebase/app');

require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAzqaEF4Oo_3d35UvSM7HvU7D7tiFj1-yc",
  authDomain: "batterysync-89680.firebaseapp.com",
  databaseURL: "https://batterysync-89680.firebaseio.com",
  projectId: "batterysync-89680",
  storageBucket: "batterysync-89680.appspot.com",
  messagingSenderId: "492042714028",
  appId: "1:492042714028:web:36ec5ada767c69d5781809",
  measurementId: "G-VSK0JQ4WN1"
};

firebase.initializeApp(firebaseConfig);
//end

var email;
var password;

document.getElementById("loginButton").addEventListener("click", login);
document.getElementById("loginButton").addEventListener("click", storeLoginDetailToLocalStorage);

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

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    console.log("Signed in!");
    showSettingsWindow();
    console.log("Login succesful")
  }).catch((error) => {
    var para = document.createElement("p");
    para.setAttribute("id", "error-text");
    var node = document.createTextNode(error);
    para.appendChild(node);
    var element = document.getElementById("login-button-div")
    var child = document.getElementById("loginButton");
    element.insertBefore(para, child);
  });

}

function showSettingsWindow(){
  ipc.send('show-settings-window')
}