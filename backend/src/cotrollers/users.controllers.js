/*Aca almacenare en un objeto todas las FUNCIONES que estan 
*relacionadas con el  usuario  */

const userCtrl ={}

const User=require('../models/Users')

userCtrl.getUsers= async(req,res)=>{
    const users= await User.find()//devuelve el arreglo de usuarios 
    res.json(users)
}

userCtrl.createUser= async(req,res)=>{
    const {username} =req.body
    const newUser= new User({username})//creando nuevo usuario
    await newUser.save() //guardando en base de datos 
    res.json({
        message:" Usuario creado"
    })
}

userCtrl.deleteUser=async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({
        message:"Usuario eliminado"
    })
}

module.exports=userCtrl