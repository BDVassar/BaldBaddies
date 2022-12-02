import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { PostSchema } from "../models/Post.js";
import { UserSchema } from "../models/User.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  User = mongoose.model('User', UserSchema)
  Post = mongoose.model('Post', PostSchema)

}

export const dbContext = new DbContext()
