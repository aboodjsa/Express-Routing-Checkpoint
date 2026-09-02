const workingHours = (req, res, next) => {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next()
  } else {
    res.send(
      '<h1>Sorry, the website is only available during working hours (Monday to Friday, 9:00 to 17:00).</h1>'
    )
  }
}

module.exports = workingHours
