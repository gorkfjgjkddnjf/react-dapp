import { ExceptionService } from '@domain/common/services'

import { InternalCode } from '@domain/common/enums'

import type { ICookieService, ICookieOptions } from '@data/interfaces'
import type { CookieValues } from '@data/enums'

class CookieService implements ICookieService {

  public get<Response> (name: CookieValues): Response {
    const findName = name.replace(/([\\.$?*|{}()[\]/+^])/g, '\\$1')
    const regex = new RegExp(`(?:^|; )${findName}=([^;]*)`)
    const matches = document.cookie.match(regex)

    if (matches) {
      const decoded = decodeURIComponent(matches[1])
      return JSON.parse(decoded) as Response
    }

    throw ExceptionService.new({
      status: {
        code: InternalCode.PROPERTY_NOT_FOUND,
        message: `Property "${name}" not found in ${this.constructor.name}`
      }
    })
  }

  public set<Payload> (name: CookieValues, payload: Payload, options?: ICookieOptions): void {
    const value = JSON.stringify(payload)
    const _options: ICookieOptions = {
      path: '/',
      ...options
    }

    if (_options.expires instanceof Date) _options.expires = _options.expires.toUTCString()
    if (_options.expires !== undefined) _options.expires = new Date(_options.expires).toUTCString()

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    for (const key in _options) {
      if (Object.hasOwn(_options, key)) {
        if (key === 'maxAge') updatedCookie += '; max-age'
        if (key === 'sameSite') updatedCookie += '; samesite'
        else updatedCookie += `; ${key}`

        const optionValue = _options[key as keyof ICookieOptions]

        if (optionValue !== true) updatedCookie += `=${optionValue as string}`
      }
    }

    document.cookie = updatedCookie
  }

  public remove (name: CookieValues, options?: ICookieOptions): void {
    this.set(name, '', { maxAge: 0, ...options })
  }

  public clear (): void {
    const cookies = document.cookie.split('; ')

    for (const key of cookies) {
      const domains = window.location.hostname.split('.')

      while (domains.length > 0) {
        const name = encodeURIComponent(key.split(';')[0].split('=')[0]) as CookieValues
        const paths = window.location.pathname.split('/')

        this.remove(name, { domain: domains.join('.') })

        while (paths.length > 0) {
          this.remove(name, {
            domain: domains.join('.'),
            path: paths.join('/')
          })

          paths.pop()
        }

        domains.shift()
      }
    }
  }

}

export default new CookieService()
