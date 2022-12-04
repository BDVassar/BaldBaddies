import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { postService } from "../Services/PostService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPost() {
  let template = ''
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
    appState.on('posts', _drawPost)
    appState.on('activePost', _drawActive)
    appState.on('activePost', this.editPostForm)
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
  editPostForm() {
    let post = appState.activePost
    console.log(post)
    setHTML('modalContent', Post.editPostForm(post))
  }

  async setActive(activeId) {
    try {
      await postService.setActive(activeId)
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }

  async editPostById(postId) {
    try {
        window.event.preventDefault()
        const form = window.event.target
        const postData = getFormData(form)
        console.log(postData)
        await postService.editPostById(postId, postData)
    } catch (error) {
        Pop.error(error.message)
        console.error(error)
    }
  }


}