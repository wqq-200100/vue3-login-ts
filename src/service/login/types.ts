export interface Iaccount {
  name: string
  password: string
}

export interface ILoginResult {
  token: string
  id: number
  name: string
}

export interface IDateType<T = any> {
  coder: number
  data: T
}
