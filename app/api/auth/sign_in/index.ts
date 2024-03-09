/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Login. */
  post: {
    status: 200
    /** Succeed in Login. */
    resBody: string
    reqBody: Types.SignInDto
  }
}
