// 封装的处理token数据的函数
const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  localStorage.removeItem(TokenKey)
}

//封装一些方法，有助于提高整体的代码的简洁性