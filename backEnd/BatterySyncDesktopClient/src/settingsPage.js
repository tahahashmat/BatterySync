const electron = require('electron');
const ipc = electron.ipcRenderer

// document.getElementById("logout-button").addEventListener("click", showLoginPage())
document.getElementById("start-syncing-button").addEventListener("click", function(){
    console.log("Button pressed")
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

}

function stopSyncing(){

}