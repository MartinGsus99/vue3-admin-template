import { defineStore } from 'pinia'
import { login, getInfo } from '@/api/system/user/index'
import type { loginForm, loginResponseData } from '@/api/system/user/type'
import { setLocalStorage, getLocalStorage } from '@/utils/localStorage'
import { userStateType } from '@/store/modules/types/types'
//引入常量路由
import { constantRoutes } from '@/router/routes'

let useUserStore = defineStore('user', {
  state: (): userStateType => ({
    token: getLocalStorage('token') || '',
    username: '',
    avatar: '',
    roles: [],
    menuRoutes: constantRoutes,
  }),
  actions: {
    async userLogin(data: loginForm) {
      await login(data).then((res: loginResponseData) => {
        if (res.success) {
          //由于pinia|vuex存储数据其实是利用js对象，应当本地持久化存储
          this.token = res.data.token as string
          setLocalStorage('token', res.data.token.toString())
          //保证当前async函数返回成功promise
          return 'ok'
        } else {
          return Promise.reject(new Error(res.data.message))
        }
      })
    },
    userLogout() {},
  },
  getters: {
    getToken(): string {
      return this.token
    },
    getUsername(): string {
      return this.username
    },
    getAvator(): string {
      return this.avatar
    },
    getRoles(): string[] {
      return this.roles
    },
  },
})

export default useUserStore
