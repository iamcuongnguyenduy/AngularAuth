const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");
const User = require("../models/user");

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://ndcuong882014:1_Abc_123@dctrainingfe.kcbnzpq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

// const client = new MongoClient(uri);
// client.connect();

// const dbName = "AngularAuth";
// const collectionName = "users";

// const db = client.db(dbName, (err) => {
//   if (err) {
//     console.log("Error connecting MongoDB");
//   } else {
//     console.log("Connected to MongoDB");
//   }
// });
// const collection = db.collection(collectionName);

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // Connect the client to the server	(optional starting in v4.7)
// client.connect();
// // Send a ping to confirm a successful connection
// client.db("admin").command({ ping: 1 });
// const dbName = "AngularAuth";
// const collectionName = "users";

// // Create references to the database and collection in order to run
// // operations on them.
// const database = client.db(dbName);
// const collection = database.collection(collectionName);
// console.log("Pinged your deployment. You successfully connected to MongoDB!");

router.get("/", (req, res) => {
  res.send("From API route");
});

// router.post("/register", (req, res) => {
//   let userData = req.body;
//   let user = new User(userData);
//   user.save((error, registeredUser) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.status(200).send(registeredUser);
//     }
//   });
// });
router.post("/register", (req, res) => {
  var user = new User(req.body);
  user
    .save()
    .then((registeredUser) => {
      res.status(200).send(registeredUser);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  User.find({ email: userData.email }, (error, user) => {
    if (error) console.error(error);
    else {
      if (!user) {
        res.status(401).send("Invalid Email");
      } else {
        if (user.password !== req.body.password)
          res.status(401).send("Invalid Password");
        else res.status(200).send(user);
      }
    }
  });
});

module.exports = router;
