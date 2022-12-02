import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const LikeSchema = new Schema({
  postId: { type: ObjectId, required: true, ref: 'Post' },
  userId: { type: ObjectId, required: true, ref: 'Account' }

})

LikeSchema.virtual('like'{
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

LikeSchema.index({ userId: 1, postId: 1 }, { unique: true })