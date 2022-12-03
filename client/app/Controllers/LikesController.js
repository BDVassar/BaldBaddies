import { likesService } from "../Services/LikesService.js";
import { Pop } from "../Utils/Pop.js";

export class LikesController {
  constructor() {
    console.log('like controller connected');
  }

  // async getLikes() {
  //   try {
  //     await likesService.getLikes()
  //   } catch (error) {
  //     Pop.error(error.message)
  //   }
  // }
  async likePost(postId) {
    try {
      debugger
      await likesService.likePost(postId)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}