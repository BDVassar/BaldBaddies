import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const CommentSchema = new Schema({
  postId: { type: ObjectId, required: true, ref: 'Post' },
  userId: { type: ObjectId, required: true, ref: 'Account' },
  des: { type: String, required: true, maxLength: 60 }
})