import { appState } from "../AppState.js"
import { User } from "../Models/User.js"
import { server } from "./AxiosService.js"

class UserService {
  async getUsers() {
    const res = await server.get('api/users')
    appState.users = res.data.map(u => new User(u))
  }

}

export const userService = new UserService()