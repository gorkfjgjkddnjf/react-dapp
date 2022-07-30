import type { IStatusCode } from '@domain/common/interfaces'

interface ICreateExceptionPayload<Data> {
  status: IStatusCode
  data?: Data
}

class ExceptionService<Data> extends Error {

  public readonly code: number

  public readonly data?: Data

  private constructor (statusCode: IStatusCode, data?: Data) {
    super()

    this.name = this.constructor.name
    this.code = statusCode.code
    this.data = data
    this.message = statusCode.message

    Error.captureStackTrace(this, this.constructor)
  }

  public static new<Data>(payload: ICreateExceptionPayload<Data>): ExceptionService<Data> {
    return new ExceptionService(payload.status, payload.data)
  }

}

export { ExceptionService }
