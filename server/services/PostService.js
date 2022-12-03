import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

const populateFields = 'title imgUrl des creatorId'
class PostService {
  async getAllPost(query) {
    const posts = await dbContext.Post.find(query).populate('Account likeCount', 'postId')
    return posts
  }
  async createPost(body) {
    const post = await dbContext.Post.create(body)
    return post
  }
  async update(postId, body, userId) {
    const post = await dbContext.Post.findById(postId)
    if (!post) throw new BadRequest(`No post at id ${postId}`)
    if (userId != post.creatorId.toString()) {
        throw new Forbidden(`You are not authorized to edit this post`)
    }
    post.title = body.title
    post.imgUrl = body.imgUrl
    post.des = body.des
    post.creatorId = body.creatorId
    await post.save()
    post.populate(populateFields)
    return post
  }
}

export const postService = new PostService()