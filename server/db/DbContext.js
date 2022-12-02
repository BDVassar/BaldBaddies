import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment";
import { LikeSchema } from "../models/Like.js";
import { PostSchema } from "../models/Post.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Post = mongoose.model('Post', PostSchema)
  Comment = mongoose.model('Comment', CommentSchema);

  Like = mongoose.model('Like', LikeSchema)

}

export const dbContext = new DbContext()
