const mongoose = require('mongoose')

/**database puede llamar a la variable URI,  mediante una meto-
 * do que proporciona node(  ya que node tiene acceso a sistema
 * operativo a traves de un objeto javascript llamado process). 
 * process es como el objeto global de mi navegador teniendo acce-
 * so a todo mo sistema, en este caso particular quiero tener
 * acceso desede process a la variable entorno o environment(env)
 */

//validacion con operador ternario de la existencia de la variable
//process.env.MONGODB_URI
const URI=process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest'

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify:false
})

const connection = mongoose.connection


connection.once('open',()=>{
    console.log("mi app Trello esta conectada a mongoDB")
})    