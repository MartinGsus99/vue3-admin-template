let setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

let getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}

export { setLocalStorage, getLocalStorage }
