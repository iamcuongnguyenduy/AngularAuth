import express from "express";
import {
  userGetAll,
  userGetByID,
  userLogin,
  userRegister,
} from "../controllers/user.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/all", verifyAdmin, userGetAll);

router.get("/id/:id", userGetByID);

export default router;
