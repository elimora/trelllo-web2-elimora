/**Encargado de manejar las notas, mediante el uso de express
 * puedo usar su funcion de enrutado (Router) la cual devuelve un
 * objeto llamado router, este objeto debe poder ser exportado para
 * su uso en los enrutadores en la seccion routes de app.js
*/
const{ Router }= require('express')
const router = Router()

const {getNotes,createNotes,upDateNotes,deleteNotes,getNote}= require('../cotrollers/notes.controllers')


router.route('/')
    .get(getNotes)
    .post(createNotes)

router.route('/:id')
    .get(getNote)
    .put(upDateNotes)
    .delete(deleteNotes)


module.exports=router