import { AuthController } from './Controllers/AuthController.js';
import { LikeController } from "./Controllers/LikeController.js";
import { PostController } from "./Controllers/PostController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  userController = new UserController();
  postController = new PostController();

  likeController = new LikeController();
}

// @ts-ignore
window.app = new App()
