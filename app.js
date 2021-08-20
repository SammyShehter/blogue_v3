const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const  http = require('http')

const indexRouter = require('./routes/index')

const app = express()
const server = http.createServer(app)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
const PORT = 6000



server.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})

module.exports = app
