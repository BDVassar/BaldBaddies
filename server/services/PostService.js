import { dbContext } from "../db/DbContext.js"

class PostService {
  async getAllPost() {
    const posts = await dbContext.Post.find().populate('Account')
    return posts
  }
  async createPost(body) {
    const post = await dbContext.Post.create(body)
    return post
  }

}

export const postService = new PostService()