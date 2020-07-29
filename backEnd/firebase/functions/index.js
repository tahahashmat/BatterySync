const functions = require("firebase-functions"); //using firebase functions
const cors = require("cors")
const admin = require("firebase-admin"); // gives you capability to interact with db

admin.initializeApp();
const db = admin.firestore();
const app = require("express")(); // using express

app.use(cors())


const updateBattery = (req, res) => {
  db.collection("Devices")
    .add({
      batteryPercentage: req.body.batteryPercentage,
      os: req.body.os,
      model: req.body.model,
      manufacturer: req.body.manufacturer,
    })
    .then((thing) => {
      res.json({ message: "cool" });
    })
    .catch((thing) => {
      res.json({ message: "not cool" });
    });
};

const getAllBatteries = (req, res) => {

  db.collection("Users")
    .get()
    .then((data) => {
      // let users = [];
      // data.forEach((doc) => {
      //   console.log(doc)
      //   // users.push({
      //   //   user: doc.data().testF
      //   // });
      // });
      res.json({ message: "cool"});
    })

    .catch((thing) => {
      console.log("!!!!!!!!!!")
      console.log(thing)
      console.log("!!!!!!!!!!")
      res.json({ message: thing.code});
    });
};
const signUp = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.collection("Accounts")
    .doc(username)
    .set({
      password: password,
    })

    .then(function () {
      res.json({ usernameToken: username });
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};

const signIn = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var docRef = db.collection("Accounts").doc(username);

  docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        if (doc.data().password == password) {
          res.json({ message: "yay"})
        } else {
            res.json({ message: "u fraud"})
        }

        console.log("Document data:", doc.data());
      } 
      else {
        res.json({ message: "u dont exist"})
      }
    })
    .catch(function (error) {
        res.json({ message: "idk whats wrong - batterySync devs"})
    });
};

const test = (req,res) => {
  return res.json({ message: "test"})
}


app.post("/updateBattery", updateBattery);
app.get("/getAllBatteries", getAllBatteries);
app.post("/signUp", signUp);
app.post("/signIn", signIn);
app.get("/test", test);

exports.api = functions.https.onRequest(app);
