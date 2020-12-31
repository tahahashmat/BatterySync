const functions = require('firebase-functions'); //using firebase functions

const admin = require('firebase-admin'); // gives you capability to interact with db
admin.initializeApp()
const db = admin.firestore()

const app = require('express')() // using express


const updateBattery = (request, response) => {

    db.collection('Users').doc(request.body.email).collection('Devices').doc(request.body.serialNumber).set({ 
        os: request.body.os,
        batteryPercentage: request.body.batteryPercentage,
        manufacturer: request.body.manufacturer,
        model: request.body.model,
        serialNumber: request.body.serialNumber,
        timeUpdated: request.body.timeUpdated,
        email: request.body.email
        
    }).then(thing => {
        response.json({ message: "cool"})
    }).catch(thing => {
        response.json({ message: "not cool"})})
}

const getAllBatteries = (req,res) => {

    db.collection('Users').get()
    
    .then(data => {
        let users = []
        data.forEach(doc => {
            users.push({
                
                battery: doc.data().batteryPercentage,
                
            })
        })
        return (res.json(users))})
        
        
        .catch(thing => {
        response.json({ message: "not cool"})})
}


app.post('/updateBattery', updateBattery)

app.get('/getAllBatteries', getAllBatteries)


exports.api = functions.https.onRequest(app)