const express=require('express')
const cors= require('cors')//permite comunicacion estre servidores
const app=express()

//setting(configuracion de mi servidor)
app.set('port', process.env.PORT || 4000)

//middlewares

app.use(cors())//permite enviar y recibir datos cuando llegue peticiones al servidor 
app.use(express.json())//permite al servidor entender formato json y formatos relacionados con Strings


//routes(definiendo las las url's que la aplicacion de react podra acceder)

app.use('/api/users',require('./routes/users'))
app.use('/api/notes',require('./routes/notes'))

module.exports=app