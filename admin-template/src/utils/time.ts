export const getTimeHelloMessage = () => {
  let now = new Date().getHours()
  if (now >= 0 && now < 12) {
    return 'Good Morning~'
  } else if (now >= 12 && now < 18) {
    return 'Good Afternoon~'
  } else {
    return 'Good Night~'
  }
}
