import { dbContext } from "../db/DbContext.js"

class CommentService {
    async getAll() {
        const comments = await dbContext.Comments.find().populate('comments')
        return comments
    }
    async create(commentData) {
        const newComment = await dbContext.Comments.create(commentData)
        return newComment
    }
}
export const commentService = new CommentService()