/**require('dotenv').config me permite importar la variable 
 * MONGODB_URI */
require('dotenv').config()

const app= require('./app')
require('./database')

async function main(){
     await app.listen(app.get('port'))
    console.log(`Servidor Trello activo en puerto: ${app.get('port')}`)
}

main()
