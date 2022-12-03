import { commentsService } from "../Services/CommentsService.js";
import { Pop } from "../Utils/Pop.js";

export class CommentsController {
  constructor() {

  }

  async getCommentsByPostId(postId) {
    try {
      const comments = await commentsService.getCommentsByPostId(postId)
      return comments
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }
}