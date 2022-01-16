require('dotenv').config()
require('./mongo')

const express = require('express')
const app = express()
const cors = require('cors')

const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

app.use(cors())
app.use(express.json())
app.use(express.static('../Client-User/build'))

app.get('/', (request, response) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.originalUrl)
  response.send('<h1>Hello World!</h1>')
})

app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

const PORT = process.env.PORT || 8090
const server = app.listen(PORT, () => {
  console.log(`El servidor esta en el puerto ${PORT}`)
})

module.exports = { app, server }
