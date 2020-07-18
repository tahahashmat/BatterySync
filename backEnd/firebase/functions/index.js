const functions = require('firebase-functions'); //using firebase functions

const admin = require('firebase-admin'); // gives you capability to interact with db
admin.initializeApp()
const db = admin.firestore()

const app = require('express')()


const updateBattery = (request, response) => {


    db.collection('Devices').add({ 
        batteryPercentage: request.body.batteryPercentage,
        os: request.body.os,
        model: request.body.model,
        manufacturer: request.body.manufacturer
    }).then(thing => {
        response.json({ message: "cool"})
    }).catch(thing => {
        response.json({ message: "not cool"})})


}

app.post('/updateBattery', updateBattery)


exports.api = functions.https.onRequest(app)