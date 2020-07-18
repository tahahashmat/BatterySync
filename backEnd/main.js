var child_process = require('child_process');

var osName = "Unknown";
var batteryPercent = null;

switch (process.platform) {
    case "win32":   osName = "Windows"; break;
    case "darwin":  osName = "MacOS";   break;
    case "linux":   osName = "Linux";   break;
    default: break;
}

if (osName == "Windows") {
    batteryPercent = getWindowsBattery();
} else if (osName == "MacOS") {
    batteryPercent = getMacOSBattery();
} else {
    console.log("Waleed gay");
}


function getWindowsBattery() {
    var data = child_process.execSync("wmic Path Win32_Battery get estimatedchargeremaining").toString();
    var batteryPercent = data.substring(29);

    return batteryPercent;
}

function getMacOSBattery() {
    var data = child_process.execSync('pmset -g batt | egrep "([0-9]+%).*" -o').toString();
    var arrayData = data.split("%");
    batteryPercent = arrayData[0];

    return batteryPercent;
}

console.log("OS Name: " + osName + "\nBattery Percentage: " + batteryPercent);

