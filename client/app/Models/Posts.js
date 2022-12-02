

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
    <div class="col-4 p-4">   
        <div class="elevation-3">
          <img class="post-card" src="${this.imgUrl}" alt="post-image">
          <div class="d-flex justify-content-between">
            <i class="mdi mdi-chat fs-1 selectable" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <i class="mdi mdi-thumb-up fs-1 selectable"></i>

          </div>

        </div>
      </div>
    `
  }

}