const router = require('express').Router()

const UserModel = require('./../model/Users')

router.get('/',async(req,res)=>{
    try {
        
        const rta = await UserModel.findAll()
        rta.length > 0 ? res.status(200).json({
                                            message:"Listado de usuarios",
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
        const rta = await UserModel.findByPk(id)
        console.log(rta);
        rta != null ? res.status(201).json({data:rta})
                    : res.status(201).json({message:'usuario no encontrado'})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/',async(req,res)=>{
    const data = req.body
    try {
        const rta = await UserModel.create(data)
        res.status(201).json({message:"Usuario creado",data:rta})
    } catch (error) {
        
    }
})

router.patch('/:id',async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const rta = await UserModel.update(data,{
            where:{
                id:id
            }
        })
        console.log(rta);
        rta[0] > 0 ? res.status(201).json({message:"usuario modificado",data:rta[1]})
                   : res.status(201).json({message:"Usuario no encontrado"})
    } catch (error) {
        res.status(400).json(error.message)
    }

})
router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const rta = await UserModel.destroy({
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