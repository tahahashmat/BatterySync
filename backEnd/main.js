var child_process = require('child_process');

const fetch = require("node-fetch"); // this is for calling api


var batteryFlag;
var osName = "Unknown";
var batteryPercent = null;
var modelName = "Unknown";
var manufacturerName = "Unknown";

switch (process.platform) {
    case "win32":
      osName = "Windows";
      batteryFlag = hasBattery(osName);
      break;
    case "darwin":
      osName = "MacOS";
      batteryFlag = hasBattery(osName);
      break;
    case "linux":
      osName = "Linux";
      batteryFlag = hasBattery(osName);
      break;
    default:
      break;
}

if (osName == "Windows") {
    if(batteryFlag == true){
      batteryPercent = getWindowsBattery();
    }
    manufacturerName = getWindowsManufacturer();
    modelName = getWindowsModel();
} else if (osName == "MacOS") {
    if(batteryFlag == true){
      batteryPercent = getMacOSBattery();
    }
    manufacturerName = "Apple";
    modelName = getMacOSModel();
} else {
    console.log("Waleed big gay and have small pp");
}

//check if device has battery, false means no battery
function hasBattery(currentOS){
    var data;
    if(currentOS == "Windows"){
      data = child_process.execSync("wmic Path Win32_Battery get estimatedchargeremaining").toString();
      if (typeof(data) == "undefined"){
        return false;
      }
      else{
        return false;
      }
    }
    else if(currentOS == "MacOS"){
      data = child_process.execSync('pmset -g batt | egrep "([0-9]+%).*" -o').toString();
      if (typeof(data) == "undefined"){
        return false;
      }
      else{
        return false;
      }
    }
}

function getWindowsBattery() {
    var data = child_process.execSync("wmic Path Win32_Battery get estimatedchargeremaining").toString();
    var batteryPercent = data.substring(29);

    return batteryPercent.trim();
}

function getWindowsManufacturer(){
    var data = child_process.execSync("wmic computersystem get manufacturer").toString();
    var manufacturer = data.substring(12);

    return manufacturer.trim();
}

function getWindowsModel(){
    var data = child_process.execSync("wmic computersystem get model").toString();
    var model = data.substring(5);

    return model.trim();
}

function getMacOSBattery() {
    var data = child_process.execSync('pmset -g batt | egrep "([0-9]+%).*" -o').toString();
    var arrayData = data.split("%");
    batteryPercent = arrayData[0];

    return batteryPercent;
}

function getMacOSModel() {
    var data = child_process.execSync('sysctl hw.model').toString();
    var arrayData = (data.substring(10)).split(",");
    modelName = arrayData[0];

    return modelName;
}


console.log("OS Name: " + osName + "\nBattery Percentage: " + batteryPercent + "\nManufacturer: " + manufacturerName + "\nModel: " + modelName);

fetch('https://us-central1-batterysync-89680.cloudfunctions.net/api/updateBattery', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
        os: osName,
        batteryPercentage: batteryPercent,
        manufacturer: manufacturerName,
        model: modelName
    })
}).then(()=> {
    console.log("hi")
}).catch((thing)=> {
    console.log(thing)
})
