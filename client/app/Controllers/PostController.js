import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { postService } from "../Services/PostService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPost() {
  let template = ''
console.log(appState.posts)
  appState.posts.forEach(p => template += p.PostTemplate)
  setHTML('posts', template)
}

function _drawActive() {
  let activePost = appState.activePost
  setHTML('modalContent', activePost.activePostTemplate)
  setHTML('modalComment', activePost.activeCommentTemplate)
}

export class PostController {
  constructor() {
    console.log('sup posters');
    appState.on('posts', _drawPost)
    appState.on('activePost', _drawActive)
    this.getPost()
  }

  async getPost() {
    try {
      await postService.getPost()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async createPost() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      console.log(formData);
      await postService.createPost(formData)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  postForm() {
    setHTML('modalContent', Post.postForm())
  }

  async setActive(activeId) {
    try {
      await postService.setActive(activeId)
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }

  


}