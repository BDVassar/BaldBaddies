import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { server } from "./AxiosService.js"

class PostService {
  async setActive(activeId) {
    const foundPost = appState.posts.find(p => p.id == activeId)
    appState.activePost = foundPost
  }
  async getPost() {
    const res = await server.get('api/posts')
    appState.posts = res.data.map(p => new Post(p))
  }

  async createPost(formData) {
    const res = await server.post('api/posts', formData)
    appState.posts.unshift(new Post(res.data))
    appState.emit('posts')
  }

async editPostById(postId, postData) {
    let foundPost = appState.posts.find(post => post.id === postId)
    await server.put('api/posts/' + foundPost, postData)
    this.getPost()
}
    
    
}

export const postService = new PostService()