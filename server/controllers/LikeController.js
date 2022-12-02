import { likeService } from "../services/LikeService.js";
import BaseController from "../utils/BaseController.js";

export class LikeController extends BaseController {
  constructor() {
    super('api/likes')
    this.router
      .get('', this.getAllLikes)
  }

  async getAllLikes(req, res, next) {
    try {
      const likes = await likeService.getAllLikes()
    } catch (error) {
      next(error)
    }
  }
}