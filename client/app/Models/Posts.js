

export class Post {
  constructor(data) {
    this.userId = data.userId
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.des = data.des
  }

  get PostTemplate() {
    return `
    <div class="col-12 col-md-4 p-3">   
        <div class="elevation-3">
          <img class="post-card" src="${this.imgUrl}" alt="post-image">
          <div class="d-flex justify-content-between">
            <i class="mdi mdi-chat fs-1 selectable" data-bs-toggle="modal" data-bs-target="#postForm"></i>
            <i class="mdi mdi-thumb-up fs-1 selectable" onclick=""></i>

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
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
    `
  }

}