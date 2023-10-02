import express from "express";
import {
  roleCreate,
  roleDelete,
  roleGetAll,
  roleUpdate,
} from "../controllers/role.controller.js";

const router = express.Router();

router.post("/", roleCreate);

router.put("/update/:id", roleUpdate);

router.get("/all", roleGetAll);

router.delete("/delete/:id", roleDelete);

export default router;
