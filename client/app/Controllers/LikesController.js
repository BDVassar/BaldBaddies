import { likesService } from "../Services/LikesService.js";
import { Pop } from "../Utils/Pop.js";

export class LikesController {
  constructor() {
    console.log('like controller connected');
  }

  async likePost(postId) {
    try {
      await likesService.likePost(postId)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}