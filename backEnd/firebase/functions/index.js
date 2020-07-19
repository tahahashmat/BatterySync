const functions = require('firebase-functions'); //using firebase functions

const admin = require('firebase-admin'); // gives you capability to interact with db
admin.initializeApp()
const db = admin.firestore()

const app = require('express')()


const updateBattery = (request, response) => {

    db.collection('Users').doc(request.body.serialNumber).set({ 
        os: request.body.os,
        batteryPercentage: request.body.batteryPercentage,
        manufacturer: request.body.manufacturer,
        model: request.body.model,
        serialNumber: request.body.serialNumber,
        timeUpdated: request.body.timeUpdated 
        
    }).then(thing => {
        response.json({ message: "cool"})
    }).catch(thing => {
        response.json({ message: "not cool"})})


}

app.post('/updateBattery', updateBattery)


exports.api = functions.https.onRequest(app)