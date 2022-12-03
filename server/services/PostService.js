import { dbContext } from "../db/DbContext.js"

class PostService {
  async getAllPost(query) {
    const posts = await dbContext.Post.find(query).populate('Account likeCount', 'postId')
    return posts
  }
  async createPost(body) {
    const post = await dbContext.Post.create(body)
    return post
  }

}

export const postService = new PostService()