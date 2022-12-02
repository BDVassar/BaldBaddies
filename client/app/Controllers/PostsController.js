import { appState } from "../AppState.js";
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
  }
}