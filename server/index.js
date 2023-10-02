import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import roleRoute from "./routes/role.js";
import userRoute from "./routes/user.js";
const app = express();

//read env data from .env
dotenv.config();

//read body json of request
app.use(express.json());

app.use("/api/role", roleRoute);
app.use("/api/user", userRoute);

app.use("/api/login", (req, res) => {
  res.status(200).send("Login page");
});

//****This is for Mongo Cloud */
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//connect to local Mongo DB
// const connectMongoDB = async () => {
//   try {
//     mongoose.connect(process.env.MONGO_URL);
//     console.log("Connected to DB");
//   } catch (error) {
//     throw error;
//   }
// };

app.use("/", (req, res) => {
  res.send("API server launched");
});

app.listen(8800, () => {
  connectMongoDB();
  console.log("Connected to backend server");
});
