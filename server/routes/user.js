import express from "express";
import {
  userGetAll,
  userGetByID,
  userLogin,
  userRegister,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/all", userGetAll);

router.get("/id/:id", userGetByID);

export default router;
