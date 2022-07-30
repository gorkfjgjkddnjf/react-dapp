import type { IHttpService, IGetPayload, IPostPayload, IRequestInit } from '@data/interfaces'

class HttpService implements IHttpService {

  protected _init: IRequestInit

  constructor (init: IRequestInit) {
    this._init = init
  }

  public async get<Response> (url: string, payload: IGetPayload): Promise<Response> {
    return await this._request<Response>(url, payload, 'GET')
  }

  public async post<Response> (url: string, payload: IPostPayload): Promise<Response> {
    return await this._request<Response>(url, payload, 'POST')
  }

  public async put<Response> (url: string, payload: IPostPayload): Promise<Response> {
    return await this._request<Response>(url, payload, 'PUT')
  }

  public async patch<Response> (url: string, payload: IPostPayload): Promise<Response> {
    return await this._request<Response>(url, payload, 'PATCH')
  }

  public async delete <Response> (url: string, payload: IGetPayload): Promise<Response> {
    return await this._request<Response>(url, payload, 'DELETE')
  }

  private async _request<Response> (url: string, payload: IPostPayload, method: string): Promise<Response> {
    url = `${this._init.domain}/${url}`

    const init: RequestInit = {
      method,
      ...this._init
    }

    if (payload.params !== undefined) url = `${url}?${new URLSearchParams(payload.params).toString()}`
    if (payload.body !== undefined) init.body = payload.body

    return await fetch(url, init).then(async (response) => await response.json() as Response)
  }

}

export { HttpService }
