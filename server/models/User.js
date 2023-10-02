import { mongoose, Schema } from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    mobileNumber: {
      type: Number,
      require: true,
      unique: true,
    },
    role: {
      type: [Schema.Types.ObjectId],
      require: true,
      ref: "Role",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
