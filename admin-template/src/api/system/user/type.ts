export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
  username: string
  avatar: string
  roles: string[]
  message: string
  success: boolean
}

export interface loginResponseData {
  code: number
  data: dataType
  success: boolean
}

interface userInfo {
  id: number
  username: string
  avatar: string
  roles: string[]
}

export interface userInfoResponseData {
  code: number
  data: userInfo
}
