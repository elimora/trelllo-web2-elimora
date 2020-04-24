const path=require('path')
const express =require('express')

const app =express()
const SocketIo=require('socket.io')

/**El modulo app podra ser pasado como parametro solo 
 * cuandp ya el servidor este en funcionamiento, es por esta 
 * razon que en primer plano se guarda en la constante server 
 * la inicializacion de escucha del servidor, una vez este este a 
 * la escucha puede ser pasado como parametro al SocketIo()
 */

//Estableciendo el servidor(settings)
app.set('port', process.env.PORT || 5000)
const port= app.get('port')


//Iniciando el servidor(star the server)
const server = app.listen(port,()=>{
    console.log("Servidor a la escucha  en el puerto "+port)
})

//comunicacion de websockets
const io= SocketIo(server)

//websockets
io.on('connection',(socket)=>{
    console.log("new conection :" +socket.id)

    socket.on('chat:message',(data)=>{
        io.sockets.emit('chat:message',data)
        
    })
    socket.on('chat:typing',(data)=>{
        socket.broadcast.emit('chat:typing',data)
    })
})

//Archivos estaicos(static files)
app.use(express.static(path.join(__dirname,'public')))

