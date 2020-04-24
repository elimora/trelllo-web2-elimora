import React, { Component } from 'react'
import axios from 'axios'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 

export default class CreateNote extends Component {

    //definiendo en el estado una lista de usuarios
    state={
        users:[],
        userSelected:'',
        title: '',
        content: '',
        date: new Date(),
        editing:false,
        _id:''
    }

    async componentDidMount(){//obteniendo usuarios y guardando solo el primero
        
       const res= await axios.get('http://localhost:4000/api/users')//respuesta del servidor con todos los usuarios 
       this.setState({
           users:res.data.map(user=>user.username),
           userSelected:res.data[0].userSelected
        
        }) 
        
        if(this.props.match.params.id){
            const res= await axios.get('http://localhost:4000/api/notes/'+this.props.match.params.id)
            
            //significa que quiero actualizar algo
            this.setState({
                title:res.data.title,
                content:res.data.content,
                date:new Date(res.data.date) ,
                userSelected:res.data.author,
                editing:true,
                _id:this.props.match.params.id
            
            })
        }

    }


    //con esta funcion busco crear una nueva nota 
    onSubmit =async (e)=>{

        // modelos de valores a enviara al servidor
        e.preventDefault()

        const   newNote = {
            title:this.state.title,
            content: this.state.content,
            date:this.state.date,
            author:this.state.userSelected
        }

        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/'+this.state._id,newNote)
        }else {
            await axios.post('http://localhost:4000/api/notes',newNote)
        }
        window.location.href='/'
    }

    //escuchando la informacion del evento 
    onInputChange = e =>{
       
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    //manejando el cambio al selecionar una fecha en el calendario
    onChangeDate = date =>{
        this.setState({date})
    }

    render() {
        return (
           <div className="col-md-6 offset-md-3" >
               <div className="card card-body">
                   <h4>Crea una tarea miTrello</h4>
                    {/*Creando un SELEC para el usuario*/}
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="userSelected"
                            onChange={this.onInputChange}
                            value={this.state.userSelected}
                           
                            
                        >
                            {
                                this.state.users.map(user=> 
                                <option key={user} value={user}>
                                    {user}
                                </option>)
                            }
                        </select>
                    </div>
                     {/*Titulo de la tarea*/}
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Title" 
                            name="title" 
                            onChange={this.onInputChange}
                            value={this.state.title}
                            required
                            />
                    </div>
                     {/*Descripcion de la tarea*/}

                     <div className="form-group">
                         <textarea 
                            name="content" 
                            className="form-control"
                            placeholder="Descripcion de tarea miTrello"
                            onChange={this.onInputChange}
                            value={this.state.content}
                            required
                            >
                            
                        </textarea>
                     </div>

                     {/*Creacion de calendario por el componete reactjs Datepicker
                     por medio de npm install react-datepicker --save, esto los que 
                     hace es instalar tanto el codigo como de css como el de js y 
                     anbos deben ser importados*/}

                     <div className="form-group">
                         <Datepicker 
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                     </div>

                   <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                   </form>
               </div>
           </div>
        )
    }
}
