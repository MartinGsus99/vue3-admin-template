export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}

export interface loginResponseData {
  code: number
  data: dataType
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

