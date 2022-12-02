import { appState } from "../AppState.js"
import { User } from "../Models/Users.js"
import { server } from "./AxiosService.js"

class UsersService {
  async getUsers() {
    const res = await server.get('api/users')
    appState.users = res.data.map(u => new User(u))
  }

}

export const usersService = new UsersService()