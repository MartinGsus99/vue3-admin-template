export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
  message: string
}

export interface loginResponseData {
  code: number
  data: dataType
  success: boolean
  message: string
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
