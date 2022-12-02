import { Schema } from "mongoose";

export const UserSchema = new Schema(
    {
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
      userId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
  )