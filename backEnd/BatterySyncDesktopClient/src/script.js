// import {register, signIn} from '../../main'

var email;
var password;

document.getElementById("loginButton").addEventListener("click", storeLoginDetailToLocalStorage);
document.getElementById("loginButton").addEventListener("click", function(){console.log("Bruh")});

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

// function login(){
//   email = getEmail();
//   password = getPassword();
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((result) => {
//     console.log("Signed in!");
//     sendBatteryInfo(batteryFlag);

//   }).catch((error) => {
//     console.log(error.message);
//   });
// }