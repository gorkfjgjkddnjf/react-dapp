type Params = string[][] | Record<string, string> | string | URLSearchParams

interface IGetPayload {
  params?: Params
}

interface IPostPayload extends IGetPayload {
  body?: BodyInit
}

interface IRequestInit extends Omit<RequestInit, 'method' | 'body'> {
  domain: string
}

interface IHttpService {
  get<Response> (url: string, payload: IGetPayload): Promise<Response>
  post<Response> (url: string, payload: IPostPayload): Promise<Response>
  put<Response> (url: string, payload: IPostPayload): Promise<Response>
  patch<Response> (url: string, payload: IPostPayload): Promise<Response>
  delete<Response> (url: string, payload: IGetPayload): Promise<Response>
}

export type {
  IGetPayload,
  IPostPayload,
  IRequestInit,
  IHttpService
}
