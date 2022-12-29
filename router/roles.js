const router = require('express').Router()
const RolModel = require('./../model/Roles')

router.get('/',async(req,res)=>{
    try {
        
        const rta = await RolModel.findAll()
        rta.length > 0 ? res.status(200).json({
                                            message:"Listado de Roles",
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
        const rta = await RolModel.findByPk(id)
        console.log(rta);
        rta != null ? res.status(201).json({data:rta})
                    : res.status(201).json({message:'rol no encontrado'})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/',async(req,res)=>{
    const data = req.body
    try {
        const rta = await RolModel.create(data)
        res.status(201).json({message:"Rol creado",data:rta})
    } catch (error) {
        
    }
})

router.patch('/:id',async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const rta = await RolModel.update(data,{
            where:{
                id:id
            }
        })
        console.log(rta);
        rta[0] > 0 ? res.status(201).json({message:"Rol modificado",data:rta[1]})
                   : res.status(201).json({message:"Rol no encontrado"})
    } catch (error) {
        res.status(400).json(error.message)
    }

})
router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const rta = await RolModel.destroy({
            where:{
                id:id
            }
        })
        console.log(rta);
        rta === 0 ? res.status(201).json({message:"usuario no encontrado"})
                  : res.status(200).json({message:"Eliminado"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports= router