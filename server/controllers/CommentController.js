import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class CommentController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
        .get(', this.getAll')
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.create)
    }
    async getAll(req, res, next) {
        try {
            const comments = await commentService.getAll()
            return res.send(comments)
        } catch (error){
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            req.body.userId = req.userInfo.id
            const newComment = await commentService.create(req.body)
            return res.send(newComment)
        } catch (error) {
            next(error)
        }
    }
}