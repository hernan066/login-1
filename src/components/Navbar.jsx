import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { withRouter } from "react-router";

const Navbar = ({ history, firebaseUser }) => {
  const cerrarSesion = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand ms-3" to="/">
        AUTH
      </Link>
      <div>
        <div className="d-flex">
          <NavLink className="btn btn-dark ms-2" to="/" exact>
            Inicio
          </NavLink>
          {firebaseUser !== null ? (
            <NavLink className="btn btn-dark mr-2" to="/admin">
              Admin
            </NavLink>
          ) : null}
          {firebaseUser !== null ? (
            <button
              className="btn btn-dark me-3"
              onClick={() => cerrarSesion()}
            >
              Cerrar sesion
            </button>
          ) : (
            <NavLink className="btn btn-dark me-3" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
export default withRouter(Navbar);
