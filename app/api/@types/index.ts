/* eslint-disable */
/** Create user params. */
export type SignUpDto = {
  email: string
  password: string
}

/** Create user result. */
export type SignUpResult = {
  id: string
  email: string
}

/** Sign in params. */
export type SignInDto = {
  email: string
  password: string
}
