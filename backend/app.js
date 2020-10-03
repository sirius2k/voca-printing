const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const path  = require('path')
const history = require('connect-history-api-fallback')

const app = express()
const port = 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

/*
For reference : 

app.use('/api/metric', metricRouter);
*/
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
