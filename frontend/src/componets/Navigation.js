import React, { Component } from 'react'
import { link, Link } from 'react-router-dom'// con link evito refrescar la pagina en accesando a href="/"

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container">
                    <Link className="navbar-brand" to="/" >miTrello App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Crear Tarea</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">Crear Usuario</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
