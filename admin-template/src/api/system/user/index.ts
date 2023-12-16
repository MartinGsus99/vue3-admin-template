import request from '@/utils/request'
import type { loginForm, loginResponseData } from './type'
enum API {
  LOGIN_URL = '/system/user/login',
  USERINFO_URL = '/system/user/info',
  LOGOUT_URL='/system/user/logout'
}

export function login(data: loginForm) {
  return request<any, loginResponseData>({
    url: API.LOGIN_URL,
    method: 'post',
    data,
  })
}

export function getInfo(data: Object) {
  return request({
    url: API.USERINFO_URL,
    method: 'get',
    params: {
      data,
    },
  })
}
