const router = require('express').Router()

const TasksModel = require('./../model/Tasks')

router.get('/',async(req,res)=>{
    try {
        const rta = await TasksModel.findAll()
        rta.length > 0 ? res.status(200).json({
                                            message:"Listado de Tareas",
                                            total: rta.length,
                                            data:rta})
                       : res.status(200).json({message:"Ahun no hay registros"})
    } catch (error) {
        res.status(400).json(error.message)
    }
})
router.get('/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const rta = await TasksModel.findByPk(id)
        console.log(rta);
        rta != null ? res.status(201).json({data:rta})
                    : res.status(201).json({message:'Tarea no encontrada'})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/',async(req,res)=>{
    const data = req.body
    try {
        const rta = await TasksModel.create(data)
        res.status(201).json({message:"Tarea creada",data:rta})
    } catch (error) {
        
    }
})

router.patch('/:id',async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const rta = await TasksModel.update(data,{
            where:{
                id:id
            }
        })
        console.log(rta);
        rta[0] > 0 ? res.status(201).json({message:"Tarea modificada",data:rta[1]})
                   : res.status(201).json({message:"Tarea no encontrada"})
    } catch (error) {
        res.status(400).json(error.message)
    }

})
router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const rta = await TasksModel.destroy({
            where:{
                id:id
            }
        })
        console.log(rta);
        rta === 0 ? res.status(201).json({message:"Tarea no encontrada"})
                  : res.status(200).json({message:"Eliminada"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports= router