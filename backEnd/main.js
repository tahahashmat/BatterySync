var child_process = require('child_process');

var osName;

switch (process.platform) {
    case "win32":
        osName = "Windows";
        break;
    case "darvin":
        osName = "MacOS";
        break;
    case "linux":
        osName = "Linux";
        break;
    default:
        break;
}

var data = child_process.execSync("wmic Path Win32_Battery get estimatedchargeremaining").toString();
var batteryPercent = data.substring(29);

console.log("OS Name: " + osName + "\nBattery Percentage: " + batteryPercent);

