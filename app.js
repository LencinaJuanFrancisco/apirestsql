const express = require('express')
const app = express()
const db = require('./model/connect')
app.use(express.json())


app.use('/users',require('./router/users'))
app.use('/roles',require('./router/roles'))
app.use('/tasks',require('./router/tasks'))

db.sync().then(() => {
    console.log("Conectado a SQLite")
  }).catch(() => {
    console.log("Hubo un error al conectarse a SQLite")
  })

app.listen(3000,()=>{
    console.log('app 🏃🏃🏃🏃 en puerto 3000')
})