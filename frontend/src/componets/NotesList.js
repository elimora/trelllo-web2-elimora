import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

export default class NotesList extends Component {

    state={
        notes:[]
    }
    // Extraccion de lista de notas o actividades obtenida desde el backend
    componentDidMount(){
        this.getNotes()
    }

    //funcion para obtener notes 
    async getNotes(){
        const res= await axios.get('http://localhost:4000/api/notes')
        //estableciendo el estado de los usuarios 
        this.setState({notes: res.data})
    }

    //borrado
    deleteNotes = async (id)=>{
        //console.log(id)
        await axios.delete('http://localhost:4000/api/notes/'+id)
        this.getNotes()//actualizando la interfaz luego del borrado
    }
    render() {
        return (
            
            <div className="row">
                {
                    //Recorriendo cada una de las notas map()
                    this.state.notes.map(notes=>(
                      <div className="col-md-4 p-2" key={notes._id} >
                          <div className="card">
                              <div className="card-header d-flex justify-content-between">
                                   <h5>{notes.title}</h5>
                                  
                                   <Link className="btn btn-primary"to={"/edit/"+notes._id}>
                                        Editar                                   
                                   </Link>
                              </div>
                              <div className="card-body">
                                  <p>{notes.content}</p>
                                  <p>{notes.author}</p>
                                  <p>{format(notes.date)}</p>
                              </div>
                              <div className="card-footer">
                                  <button className="btn btn-danger" onClick={() =>this.deleteNotes(notes._id)}>
                                      Borrar
                                  </button>
                              </div>
                          </div>
                      </div>

                    ))
                }
            </div>
        )
    }
}
