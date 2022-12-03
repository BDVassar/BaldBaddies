

export class Post {
  constructor(data) {
    this.userId = data.userId
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.des = data.des
    this.likeCount = data.likeCount
  }

  get PostTemplate() {
    return `
    <div class="col-12 col-md-4 p-3">   
        <div class="card elevation-3">
          <img class="row m-0 post-card selectable rounded-top" src="${this.imgUrl}" alt="post-image" data-bs-toggle="modal" data-bs-target="#postForm">
          <div class="row m-0 p-0">
            <i class="mdi mdi-thumb-up fs-1 selectable" onclick="app.likesController.likePost(${this.id})"></i>
          </div>
        </div>
    </div>
    `
  }




  static postForm() {
    return `
    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Post that Shine</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form onsubmit="app.postsController.createPost()">
      <div class="mb-3">
        <input type="text" class="form-control" id="title" name="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <input type="url" class="form-control" id="imgUrl" name="imgUrl" placeholder="That Bald head Url">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="des" name="des" placeholder="Tell us about that pic">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
    `
  }

}