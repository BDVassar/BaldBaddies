import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const CommentSchema = new Schema({
  postId: { type: ObjectId, required: true, ref: 'Post' },
  userId: { type: ObjectId, required: true, ref: 'Account' },
  des: { type: String, required: true, maxLength: 400 }
}, { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('Account', {
  localField: 'userId',
  ref: 'Account',
  foreignField: '_id'
})

CommentSchema.virtual('Post', {
  localField: 'postId',
  ref: 'Post',
  foreignField: '_id'
})