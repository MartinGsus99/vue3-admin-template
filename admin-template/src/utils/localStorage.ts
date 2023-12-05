let setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

let getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}

let removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

export { setLocalStorage, getLocalStorage, removeLocalStorage }
