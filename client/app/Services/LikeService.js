import { appState } from "../AppState.js"
// import { Post } from "../Models/Posts.js"
import { server } from "./AxiosService.js"

class LikeService {
  async likePost(postId) {
    const res = await server.post('api/likes', { postId })
    console.log(res.data);
    const like = appState.posts.find(l => l.id == postId)
    like.likeCount++
    appState.emit('posts')
  }

}

export const likeService = new LikeService()