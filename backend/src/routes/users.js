/*Encrgado de manejar las rutas de los usuarios*/

const{ Router }= require('express')
const router = Router()


const {getUsers,createUser,deleteUser}=require('../cotrollers/users.controllers')

router.route('/') 
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    //.get()
    //.put()
      .delete(deleteUser)
     

module.exports=router
//cuando creo un nombre como por ejeplo Note, mongodb crea por mi
//una coleccion llamada users y se encarga de guardar los datos 