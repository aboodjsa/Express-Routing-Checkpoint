const express = require('express')
const path = require('path')
const workingHours = require('./middleware/workingHours')
const pagesRouter = require('./routes/pages')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(workingHours)

app.use('/', pagesRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
