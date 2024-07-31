const express = require('express')
require('dotenv').config()

const taskApi = require('./routes/taksRoutes')
const pushRoutes = require('./services/messaging')
const mongoconnection = require('./database/connection')
const PORT = process.env.PORT || 8001
const app = express()

// setup db connection
mongoconnection.OpenConnection(process.env.DB_CONNECTION_STRING).then(() => {
    console.log('connection to mongo well established')
})

// setup for json data|form data|routing|channel messaging
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/tasks', taskApi)
app.use('/service/com', pushRoutes)

app.listen(PORT, () => {
    console.log(`Task API live and listening on port ${PORT}.`)
})
