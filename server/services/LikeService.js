import { dbContext } from "../db/DbContext.js"

class LikeService {
  async getAllLikes() {
    const likes = await dbContext.Like.find()
    return likes
  }


  async liked(body) {
    const like = await dbContext.Like.create(body)
    return like
  }
}

export const likeService = new LikeService()