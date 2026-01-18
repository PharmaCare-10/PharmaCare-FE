export function loginUser(user) {
  localStorage.setItem("user", JSON.stringify(user))
}

export function logoutUser() {
  localStorage.removeItem("user")
}

export function getCurrentUser() {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

export function isAuthenticated() {
  return !!localStorage.getItem("user")
}
