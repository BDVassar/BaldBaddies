import { appState } from "../AppState.js"
import { usersService } from "../Services/UsersService.js"
import { Pop } from "../Utils/Pop.js"



export class UsersController {
  constructor() {
    console.log('sup baddies')
    appState.on('users', this.getUsers)
  }

  async getUsers() {
    try {
      await usersService.getUsers()
    } catch (error) {
      Pop.error(error.message)
    }
  }
}