

export class Post {
  constructor(data) {
    this.userId = data.userId
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.des = data.des
  }
}