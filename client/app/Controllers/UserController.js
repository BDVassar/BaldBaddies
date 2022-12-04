import { appState } from "../AppState.js"
import { userService } from "../Services/UserService.js"
import { Pop } from "../Utils/Pop.js"



export class UserController {
  constructor() {
    console.log('sup baddies')
    appState.on('users', this.getUsers)
  }

  async getUsers() {
    try {
      await userService.getUsers()
    } catch (error) {
      Pop.error(error.message)
    }
  }

}