const electron = require('electron');
const ipc = electron.ipcRenderer
const child_process = require('child_process');
// const email = require('./loginPage')
const batteryReader = require('../../main')

var email;

document.getElementById("start-syncing-button").addEventListener("click", function(){
    console.log("Button pressed")
    startSyncing()
})

document.getElementById("stop-syncing-button").addEventListener("click", function(){
    console.log("Button pressed")
})

document.getElementById("logout-button").addEventListener("click", function(){
    console.log('logout succesful')
    stopSyncing()
    showLoginPage()
})


function showLoginPage(){
    ipc.send('show-login-page')
}

function startSyncing(){
    //CHECK BATTERY FIRST AND SHOW ERROR BOX
    email = getEmailLocalStorage()
    batteryReader.sendBatteryInfo(true, email)
}

function stopSyncing(){

}

//Checks if the current machine has a battery, if false will show error and not send battery information
function deviceBatteryChecker(){
    switch(process.platform){
        case "win32": return hasBattery("Windows");
        case "darwin": return hasBattery("MacOS");
        case "linux": return hasBattery("Linux");
        default: return false;
    }
}

function hasBattery(currentOS) {
    var query;
    var batteryPercent;
    if (currentOS == "Windows") {
        query = child_process.execSync("wmic Path Win32_Battery get estimatedchargeremaining").toString();
        batteryPercent = query.substring(29);
        batteryPercent.trim()   
        console.log("windows")
        if (batteryPercent == "") { return false; } else { return true; }
    } 
    else if (currentOS == "MacOS") {
        query = child_process.execSync('pmset -g batt | egrep "([0-9]+%).*" -o').toString();
        var tempArray = query.split("%");
        batteryPercent = tempArray[0];
         if (batteryPercent == "") { return false; } else { return true; }
    }
  }

  function getEmailLocalStorage(){
    return localStorage.getItem('EMAIL')
  }