/**Los modelos de datos, su nombre sugiere lo que hace. Define las 
 * caracteristicas que tendran los a objetos que voy a manejar 
 * en este caso los las Notes o tareas , es decir por ejemplo: inicio de
 * una actividad que requiera completar.Para esto se pueden crear 
 * clases o modelos que interactuen con la base de datos, pero 
 * cuando de trabaja con node se puede usar el modulo mongoose, con
 *  el cual ademas de permitirme conexion a la base de datos me 
 * permite modelar dichos datos, usando destructuring solo requirire
 * Schema(caracteristicas definidas de los datos ) y model(como 
 * mongodb interactuara con dicha base de datos)
 */

 const {Schema,model} =require('mongoose')

 const noteSchema= new Schema({
     title:String,
     content:{
         type: String,
         required:true
        },
     author:String,
     date:{
         type:Date,
         default:Date.now
     }
 }, {
     timestamps:true//esto permite agregar dos propiedades al 
     //crear un dato: fecha de creacion y de actualizacion  
 })

 //basado en noteSchema puedo crear un nodelo que tendra por para
 //metros un nombre y el eschema que fue definido

module.exports= model('Note',noteSchema)
//cuando creo un nombre como por ejeplo Note, mongodb crea por mi
//una coleccion llamada notes

/** ya con esto ya tengo definida la forma en la cual la base de
 * datos estara guardando, eliminando y acualizando datos relacion-
 * nado con las notas, es decir al crear una nota a actividad la 
 * base de datos comprobara si la nota que estoy gusrdando tiene un
 * titulo, contenido( que debe ser String) y un autor 
 */
