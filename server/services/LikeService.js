import { dbContext } from "../db/DbContext.js"

class LikeService {
  async getAllLikes() {
    const likes = await dbContext.Like.find()
    return likes
  }


  async liked(body) {
    const like = await dbContext.Like.create(body)
    await like.populate('like', 'name picture')
    return like
  }
  async getLikesByPostId(postId) {
    const likes = await dbContext.Like.find({ postId }).populate('like', 'name picture')
    return likes
  }

}

export const likeService = new LikeService()