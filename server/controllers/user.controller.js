import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {CreateSuccess} from "../utils/success.js";
import {CreateError} from "../utils/error.js"

export const userRegister = async (req, res, next) => {
  try {
    // const role = await Role.find({ role: "Operator" });
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
      mobileNumber: req.body.mobileNumber,
      role: req.body.role,
    });
    await newUser.save();
    // return res.status(201).send("User created");
    return next(CreateSuccess(201, "User Created"))
  } catch (error) {
    // return res.status(500).send("Something went wrong");
    return next(CreateError(500, "Something went wrong"))
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // return res.status(404).send("Wrong username or password");
        return next(CreateError(404, "Wrong username or password"))
    }
    const inputPassword = await req.body.password;
    const isCorrectPassword = await bcrypt.compare(
      inputPassword,
      user.password
    );
    if (!isCorrectPassword) {
      // return res.staus(401).send("Wrong username or password");
      return next(CreateError(404, "Wrong username or password"))
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    // return res.status(200).send(`${user.email} login successfully`);
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      staus: 200,
      message: "Login success",
      token: token,
      data: user,
    });
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};

export const userGetAll = async (req, res, next) => {
  try {
    const users = await User.find({});
    // return res.status(200).send(users);
    return next(CreateSuccess(200, "Get all users successfully", users))
  } catch (error) {
    // return res.status(500).send("Something went wrong");
    return next(CreateError(500, "Something went wrong"))
  }
};

export const userGetByID = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      // return res.status(404).send("User not found");
      return next(CreateError(404, "User not found"))
    }
    // return res.status(200).send(user);
    return next(CreateSuccess(200, "Get user successfully", user))
  } catch (error) {}
};
