import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">AUTH</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-dark ms-2" to="/" exact>
                        Inicio
                    </NavLink>
                    <NavLink className="btn btn-dark ms-2" to="/login" exact>
                        Login
                    </NavLink>
                    <NavLink className="btn btn-dark ms-2" to="/admin" exact>
                        Admin
                    </NavLink>
                </div>
            </div>
            
        </div>
    )
}
