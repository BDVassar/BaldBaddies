import { Auth0Provider } from "@bcwdev/auth0provider";
import { likeService } from "../services/LikeService.js";
import BaseController from "../utils/BaseController.js";

export class LikeController extends BaseController {
  constructor() {
    super('api/likes')
    this.router
      .get('', this.getAllLikes)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.liked)

  }

  async getAllLikes(req, res, next) {
    try {
      const likes = await likeService.getAllLikes()
      return res.send(likes)
    } catch (error) {
      next(error)
    }
  }

  async liked(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      const like = await likeService.liked(req.body)
      return res.send(like)
    } catch (error) {
      next(error)
    }
  }




}