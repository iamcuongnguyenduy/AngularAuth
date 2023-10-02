import mongoose from "mongoose";

const RoleSchema = mongoose.Schema(
  {
    role: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Role", RoleSchema);
