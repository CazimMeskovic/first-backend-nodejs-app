/* const express = require('express')
const tasks = require('./routes/tasks')
const conectDB = require('./db/conect')
require('dotenv').config()
const notFound = require('./midelwere/not-foubd')

const app = express()

//midellwer
app.use(express.static('./public'))
app.use(express.json())

//route
// app.get('/heloo', (req, res) => {
  //  res.send('sve uredu stranico')
 // }) 

app.use('/api/v1/tasks', tasks)

app.use(notFound)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        conectDB(process.env.MONGO_DB)
        app.listen(port, console.log(`sve ok port je ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start() */

 const express = require('express')
const tasks = require('./routes/tasks')
const conectDB = require('./db/conect')
require('dotenv').config()
const notFound = require('./midelwere/not-foubd')
const eroorHandleMidelwerw = require('./midelwere/error-handler')

const app = express()

//midellwer
app.use(express.static('./public'))
app.use(express.json())

//route
// app.get('/heloo', (req, res) => {
  //  res.send('sve uredu stranico')
 // }) 

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(eroorHandleMidelwerw)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        conectDB(process.env.MONGO_DB)
        app.listen(port, console.log(`sve ok port je ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start() 

