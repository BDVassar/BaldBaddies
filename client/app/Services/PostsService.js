import { appState } from "../AppState.js"
import { Post } from "../Models/Posts.js"
import { server } from "./AxiosService.js"

class PostsService {
  async getPost() {
    const res = await server.get('api/posts')
    console.log(res.data)
    appState.posts = res.data.map(p => new Post(p))
  }

}

export const postsService = new PostsService()