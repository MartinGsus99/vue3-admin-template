//定义小仓库数据state数据类型
import type { RouteRecordRaw } from 'vue-router'
export type userStateType = {
  token: string | null
  username: string
  avatar: string
  roles: string[]
  menuRoutes: RouteRecordRaw[]
}
