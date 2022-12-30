const router = require('express').Router()

function routerApi(app){

app.use('/api/v1',router)

router.use('/users',require('./../router/users'))
router.use('/roles',require('./../router/roles'))
router.use('/tasks',require('./../router/tasks'))
}
module.exports = routerApi