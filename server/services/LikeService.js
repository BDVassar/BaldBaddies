import { dbContext } from "../db/DbContext.js"

class LikeService {
  async getAllLikes() {
    const likes = await dbContext.Like.find()
    return likes
  }

}

export const likeService = new LikeService()