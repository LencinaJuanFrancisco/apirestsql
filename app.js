const express = require('express')
const app = express()
const db = require('./model/connect')
const routerApi = require('./router')

app.use(express.json())

routerApi(app)


db.sync().then(() => {
    console.log("Conectado a SQLite")
  }).catch(() => {
    console.log("Hubo un error al conectarse a SQLite")
  })

app.listen(3000,()=>{
    console.log('app 🏃🏃🏃🏃 en puerto 3000')
})