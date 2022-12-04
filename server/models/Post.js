import { Schema } from "mongoose";

export const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String, required: true, maxLength: 400 },
    des: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PostSchema.virtual('Account', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id'
})

PostSchema.virtual('likeCount', {
  localField: '_id',
  foreignField: 'postId',
  ref: 'Like',
  count: true
})

PostSchema.virtual('Comments', {
  localField: '_id',
  ref: 'Comment',
  foreignField: 'postId',
  justOne: false
})