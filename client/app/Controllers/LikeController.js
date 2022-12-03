import { likeService } from "../Services/LikeService.js";
import { Pop } from "../Utils/Pop.js";

export class LikeController {
  constructor() {
  }

  async likePost(postId) {
    try {
      await likeService.likePost(postId)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}