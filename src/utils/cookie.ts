export enum CookieName {
  AccessToken = 'accessToken',
  RefreshToken = 'refreshToken',
}

export function setCookie(name: string, value: string | null, props?: any) {
  props = props || {}
  let exp = props.expires
  if (typeof exp == 'number' && exp) {
    const d = new Date()
    d.setTime(d.getTime() + exp * 1000)
    exp = props.expires = d
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString()
  }
  value = value !== null ? encodeURIComponent(value) : null
  let updatedCookie = name + '=' + value
  for (const propName in props) {
    updatedCookie += '; ' + propName
    const propValue = props[propName]
    if (propValue !== true) {
      updatedCookie += '=' + propValue
    }
  }
  document.cookie = updatedCookie
}

export function getCookie(name: string): string | null {
  const nameLenPlus = name.length + 1
  return (
    document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus))
      })[0] || null
  )
}

export function deleteCookie(name: string) {
  setCookie(name, null, { expires: -1 })
}

export function extractToken(authToken: string) {
  return authToken.split('Bearer ')[1]
}
