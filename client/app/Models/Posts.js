

export class Post {
  constructor(data) {
    this.userId = data.userId
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.des = data.des
    this.likeCount = data.likeCount || 0
  }

  get PostTemplate() {
    return `
    <div class="col-12 col-md-4 p-3">   
        <div class="card elevation-3">
          <img class="row m-0 post-card selectable rounded-top" src="${this.imgUrl}" alt="post-image" data-bs-toggle="modal" data-bs-target="#postForm" onclick="app.postsController.setActive('${this.id}')">
          <div class="row m-0 p-0">
            <div class="col-2 d-flex fs-1 selectable">${this.likeCount}<i class="mdi mdi-thumb-up" onclick="app.likesController.likePost('${this.id}')"></i></div>
          </div>
        </div>
    </div>
    `
  }

  get activePostTemplate() {
    return /*html*/ `
    <div class="modal-header">
		<h1
		  class="modal-title fs-5 text-dark"
		  id="exampleModalToggleLabel"
		>
		${this.title}
		</h1>
		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="modal"
			aria-label="Close"
		></button>
	</div>
	<div class="modal-body">
		<div class="row">
			<img src="${this.imgUrl}" />
			<p class="text-dark">${this.des}</p>
			<div class="row d-flex justify-content-around">
				<span class="text-dark">Comments</span>
				<span>
                    <button
						class="btn btn-primary mdi mdi-chat-plus"
						data-bs-target="#exampleModalToggle2"
						data-bs-toggle="modal"
            onclick="app.CommentsController.PostComment('${this.id}')"
					></button>
                </span>
			</div>
			<div
				id="list-item"
				class="list-group list-group-flush"
			>
            </div>
		</div>
	</div>
	<div class="modal-footer"></div>
    `
  }

  get activeCommentTemplate() {
    return `
    <div class="modal-header">
							<h1
								class="modal-title fs-5"
								id="exampleModalToggleLabel2"
							>
								Modal 2
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body"></div>
						<div class="modal-footer">
							<button
								class="btn btn-primary"
								data-bs-target="#postForm"
								data-bs-toggle="modal"
							>
								Return to Post
							</button>
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