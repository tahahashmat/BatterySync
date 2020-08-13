const electron = require('electron');
const ipc = electron.ipcRenderer
const child_process = require('child_process');
const batteryReader = require('./main')

var email;
var interval

document.getElementById("start-syncing-button").addEventListener("click", function(){
    startSyncing()
})

document.getElementById("stop-syncing-button").addEventListener("click", function(){
    stopSyncing()
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
    document.getElementById("start-syncing-button").disabled = true;
    document.getElementById("stop-syncing-button").disabled = false;
    email = getEmailLocalStorage()
    interval = setInterval(batteryReader.sendBatteryInfo(true, email), '20000')
    var status = document.getElementById('status')
    status.style.color = 'green'
}

function stopSyncing(){
    document.getElementById("start-syncing-button").disabled = false;
    document.getElementById("stop-syncing-button").disabled = true;
    clearInterval(interval)
    var status = document.getElementById('status')
    status.style.color = 'red'
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