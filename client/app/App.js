import { AuthController } from './Controllers/AuthController.js';
import { LikeController } from "./Controllers/LikeController.js";
import { PostsController } from "./Controllers/PostsController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  userController = new UserController();
  postsController = new PostsController();

  likeController = new LikeController();
}

// @ts-ignore
window.app = new App()
