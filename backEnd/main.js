//BatterySync app by Positively Pivoting

const child_process = require('child_process');
const fetch = require("node-fetch"); // Calls Firebase API
const { fail } = require('assert');
const prompt = require('prompt-sync')({sigint: true});

//firebase config
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

//Variables to be used
var batteryFlag;
var osName = "Unknown";
var batteryPercent;
var modelName = "Unknown";
var manufacturerName = "Unknown";
var serialNum;

const choice = prompt("Would you like to create an account or log in? Type create or log: ");

if (choice == "log") {
  signIn();

} else if (choice == "create") {
  register();

} else {
    fail;
}

//Checks device OS
switch (process.platform) {
    case "win32":  osName = "Windows"; batteryFlag = hasBattery(osName);  break;
    case "darwin": osName = "MacOS";   batteryFlag = hasBattery(osName);  break;
    case "linux":  osName = "Linux";   batteryFlag = hasBattery(osName);  break;
    default: console.log("OS could not be detected");              fail;  break; //ends the script
}

if (osName == "Windows") {
    if (batteryFlag == true) { batteryPercent = getWindowsBattery(); }
    manufacturerName = getWindowsManufacturer();
    modelName = getWindowsModel();
    serialNum = getWindowsSerialNum();

} else if (osName == "MacOS") {
    if (batteryFlag == true) { batteryPercent = getMacOSBattery(); }
    manufacturerName = "Apple";
    modelName = getMacOSModel();   
}

//Outputs current device and battery info
console.log("OS Name: " + osName + "\nBattery Percentage: " + batteryPercent + "\nManufacturer: " 
            + manufacturerName + "\nModel: " + modelName + "\nSerial Number: " + serialNum);


function getCurrentUserEmail() {

  var user = firebase.auth().currentUser;
  var email;

  if (user != null) {
    email = user.email;
  }

  return email;
}


//Sends Battery Info to Firebase using POST IF battery is present (NO PCs)
function sendBatteryInfo(batteryFlag) {
  if (batteryFlag == true) {

    var currentEmail = getCurrentUserEmail();

    fetch('https://us-central1-batterysync-89680.cloudfunctions.net/api/updateBattery', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: currentEmail,
          os: osName,
          batteryPercentage: batteryPercent,
          manufacturer: manufacturerName,
          model: modelName,
          serialNumber: serialNum,
          timeUpdated: getCurrentDateTime()
      })
  
    }).then(()=> {
      console.log("Battery info uploaded to Firebase")
  
    }).catch((thing)=> {
      console.log(err)
    })
  }
}

function getCurrentDateTime() {
  var today = new Date();
  var date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  return dateTime;
}

function signIn() {
  console.log("-----Sign In-----");
  const email = prompt("Type your email: ");
  const password = prompt("Type your password: ");
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    console.log("Signed in!");
    sendBatteryInfo(batteryFlag);

  }).catch((error) => {
    console.log(error.message);
  });
}

function register() {
  console.log("-----Register-----");
  const email = prompt("Type your email: ");
  const password = prompt("Type your password: ");

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    console.log("Account created!");
    sendBatteryInfo(batteryFlag);

  }).catch((error) => {
    console.log(error.message);
  });
}


/*Grunt functions for checking if device has a battery and extracting
                                  Battery Percentage
                                  Manufacturer Name
                                  Model Name

Current supported OS: Windows and Mac
*/
//check if the device has battery, false means no battery
function hasBattery(currentOS) {
  var query;
  if (currentOS == "Windows") {
    query = child_process.execSync("wmic Path Win32_Battery get estimatedchargeremaining").toString();
    if (typeof(query) == "undefined") { return false; } else { return true; }

  } else if (currentOS == "MacOS") {
    query = child_process.execSync('pmset -g batt | egrep "([0-9]+%).*" -o').toString();
    if (typeof(query) == "undefined") { return false; } else { return true; }
  }
}

//Windows Functions
function getWindowsBattery() {
  var query = child_process.execSync("wmic Path Win32_Battery get estimatedchargeremaining").toString();
  var batteryPercent = query.substring(29);

  return batteryPercent.trim();
}

function getWindowsManufacturer(){
  var query = child_process.execSync("wmic computersystem get manufacturer").toString();
  var manufacturer = query.substring(12);

  return manufacturer.trim();
}

function getWindowsModel(){
  var query = child_process.execSync("wmic computersystem get model").toString();
  var model = query.substring(5);

  return model.trim();
}

function getWindowsSerialNum() {
  var query = child_process.execSync("WMIC BIOS GET SERIALNUMBER").toString();
  var serialNum = query.substring(12);

  return serialNum.trim();
}

//MacOS Functions
function getMacOSBattery() {
  var query = child_process.execSync('pmset -g batt | egrep "([0-9]+%).*" -o').toString();
  var tempArray = query.split("%");
  batteryPercent = tempArray[0];

  return batteryPercent;
}

function getMacOSModel() {
  var query = child_process.execSync('sysctl hw.model').toString();
  var tempArray = (query.substring(10)).split(",");
  modelName = tempArray[0];

  return modelName;
}
