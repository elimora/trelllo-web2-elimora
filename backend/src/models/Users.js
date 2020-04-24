/**Los modelos de datos, su nombre sugiere lo que hace. Define las 
 * caracteristicas que tendran los a objetos que voy a manejar 
 * en este caso los usuarios, es decir por ejemplo: mombre, cedula
 * genero, altura, peso.etc. para esto se pueden crear clases o modelos 
 * que interactuen con la base de datos, pero cuando de trabaja con 
 * node se puede usar el modulo mongoose con el cual ademas de 
 * permitirme conexion a la base de datos me permite modelar datos
 */
const {Schema, model}= require('mongoose')

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps:true
})

module.exports=model('User',userSchema)