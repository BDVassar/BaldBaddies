import { appState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPost() {
  let template = ''
  appState.posts.forEach(p => template += p.PostTemplate)
  setHTML('posts', template)
}


export class PostsController {
  constructor() {
    console.log('sup posters');
    appState.on('posts', _drawPost)
    this.getPost()
  }

  async getPost() {
    try {
      await postsService.getPost()
    } catch (error) {
      Pop.error(error.message)
    }
  }
}