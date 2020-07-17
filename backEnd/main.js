var child_process = require('child_process');
const { stdout } = require('process');

var osName;

osName = process.platform;

console.log(osName);

child_process.exec("wmic Path Win32_Battery",
            function execBatteryCommand(err, stdout, stderr) {
                console.log(stdout);
});
console.log("big tiddy goth gfs");
