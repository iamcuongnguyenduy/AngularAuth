import Role from "../models/Role.js";
import { CreateSuccess } from "../utils/success.js";
import { CreateError } from "../utils/error.js";
export const roleCreate = async (req, res, next) => {
  try {
    if (req.body.role && req.body.role !== "") {
      const newRole = new Role(req.body);
      await newRole.save();
      // return res.status(201).send("Role created");
      return next(CreateSuccess(200, "Role Created successfully"));
    } else {
      return res.status(400).send("Bad request");
    }
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

export const roleUpdate = async (req, res, next) => {
  try {
    const role = await Role.findById({ _id: req.params.id });
    if (role) {
      const newData = await Role.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).send("Role updated!");
    } else {
      return res.status(404).send("Role not found");
    }
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

export const roleGetAll = async (req, res, next) => {
  try {
    const roles = await Role.find({});
    return res.status(200).send(roles);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

export const roleDelete = async (req, res, next) => {
  try {
    const roleID = req.params.id;
    const role = await Role.findById({ _id: roleID });
    if (role) {
      await Role.findByIdAndDelete(roleID);
      // return res.status(200).send("Role deleted!");
      return next(CreateSuccess(200, "Role Created successfully"));
    } else {
      return res.status(404).send("Role not found!");
    }
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};
