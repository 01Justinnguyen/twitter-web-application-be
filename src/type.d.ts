import { Request } from 'express'
import { TokenPayload } from '~/models/requests/User.requests'
import User from '~/models/schemas/User.schema'
declare module 'express' {
  interface Request {
    user?: User
    decoded_authorization?: TokenPayload
    decoded_refreshToken?: TokenPayload
    decoded_forgotPasswordToken?: TokenPayload
    decoded_email_verify_token?: TokenPayload
  }
}
