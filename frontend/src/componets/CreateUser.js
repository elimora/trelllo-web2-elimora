import React, { Component } from 'react'
import axios from 'axios'


export default class CreateUser extends Component {

    //Estableciendo el estado de la app
    state={
        users:[],
        username:''
    }

    //ajacuta codigo una ves que el componete ha sido montado
    //sera usado para pedir los datos al servidor para mostrarlos en pantalla
    //por tanto se hara una peticion, para esto en el navegador usare
    //fetch(), lo que me permite hacer peticiones http(GET,POST,DELETE...),
    //sin enbargo cuando este en produccion teendre que hacer otras cosas como
    //hacer loaders, manejo de errores etc y por tanto sera mejor usar
    // una biblioteca como axios se hace practico(npm i axios)

    async componentDidMount(){
       this.getUsers()
        console.log(this.state.user )
    }

        getUsers = async ()=>{
        const res= await axios.get('http://localhost:4000/api/users')
        //una vez hecha la peticion devuelve un arrego de usuarios
        this.setState({users:res.data})
    }

    //metodo que este a la escucha del evento de tipeo
    // "e"
    onChangeUsername =(e)=>{
        //console.log(e.target.value)
        //estableciendo el estado
        this.setState({
            username: e.target.value
        })
    }

    //escucha cada de eventos del 
    onSubmit = async e =>{
        e.preventDefault()//cancela el comportamiento default del form que es 
       //resetearlo.Quiero que este metodo envie los datos al servidor(axios)
        await axios.post('http://localhost:4000/api/users',{
           username:this.state.username
       })
       this.setState({username:''})
       this.getUsers()//asi se actualizan los datos de los usuarios
      
    }

    //elinina un usuario desde el backend con un doble clic
    //por tanto se deben ambiar los datos para que el servidor 
    //los elimine 
    deleteUser = async(id)=>{
        await axios.delete('http://localhost:4000/api/users/'+id)
        this.getUsers()//actualiza la tabla
    }

    render() {
        return (
            <div className ="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crea un nuevo usuario</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user=> (
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={user._id} 
                                    onDoubleClick={()=>this.deleteUser(user._id)}
                                    >
                                    {user.username}
                                </li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
