export enum CookieName {
  AccessToken = 'accessToken',
  RefreshToken = 'refreshToken',
}

// expires - in seconds
export function setCookie(name: string, value: string | null, props?: { expires: number }) {
  const date = new Date()

  // by default the cookie will expire in 7 days
  const exp = props?.expires ? props?.expires * 1000 : 7 * 24 * 60 * 60 * 1000
  date.setTime(date.getTime() + exp)

  document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
}

export function getCookie(name: string) {
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
