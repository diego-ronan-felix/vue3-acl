import { defineStore } from "pinia";
import UserGatewayHttp from "../infra/gateway/UserGatewayHttp";
import User from "../Entities/User";

const userGateway = new UserGatewayHttp

export const useUserStore = defineStore('users', {
  state: () => ({
    me: null as null | User,
    users: [] as User[]
  }),
  getters: {
    hasUsers: (state) => state.users.length > 0
  },
  actions: {
    async auth(email: string, password: string): Promise<User> {
      return await userGateway.login(email, password)
    }
  }
})