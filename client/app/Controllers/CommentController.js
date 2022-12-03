import { commentService } from "../Services/CommentService.js";
import { Pop } from "../Utils/Pop.js";

export class CommentController {
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