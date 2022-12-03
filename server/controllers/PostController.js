import { postService } from "../services/PostService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { likeService } from "../services/LikeService.js";

export class PostController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPost)
      .get('/:postId', this.getLikesByPostId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPost)

  }

  async getAllPost(req, res, next) {
    try {
      const posts = await postService.getAllPost(req.query)
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }
  async createPost(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const post = await postService.createPost(req.body)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }



  async getLikesByPostId(req, res, next) {
    try {
      const likes = await likeService.getLikesByPostId(req.params.postId)
      return res.send(likes)
    } catch (error) {
      next(error)
    }
  }
}