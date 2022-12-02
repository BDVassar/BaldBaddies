import { Schema } from "mongoose";

export const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        imgUrl: { type: String, required: true},
        des: { type: String, required: true },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
  )