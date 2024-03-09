/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Create user. */
  post: {
    status: 200
    /** Created User. */
    resBody: Types.SignUpResult
    reqBody: Types.SignUpDto
  }
}
