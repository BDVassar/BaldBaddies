import { dbContext } from "../db/DbContext.js"

class CommentService {
    async getAll() {
        const comments = await dbContext.Comment.find().populate('Account Post')
        return comments
    }
    async create(commentData) {
        const newComment = await dbContext.Comment.create(commentData)
        newComment.populate('Account Post')
        return newComment
    }
}
export const commentService = new CommentService()