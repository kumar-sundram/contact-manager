const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')

const { contactsRouter } = require('./app/controllers/contacts_controller')
const { usersRouter } = require('./app/controllers/users_controllers')

const app = express()
const port = process.env.PORT || 5000

const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the Contact Manager')
})

app.use('/contact', contactsRouter)
app.use('/users', usersRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


app.listen(port, () => {
    console.log('Listening to port', port)
})