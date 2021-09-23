import React, { useCallback, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from "firebase/auth";

import app from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { withRouter } from "react-router";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [esRegistro, setEsRegistro] = useState(false);

  //procesarDatos
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      //console.log('Ingrese email');
      setError("Ingrese email");
      return;
    }
    if (!pass.trim()) {
      //console.log('Ingrese password');
      setError("Ingrese password");
      return;
    }
    if (pass.length < 6) {
      //console.log('El password debe tener 6 caracteres minimo');
      setError("El password debe tener 6 caracteres minimo");
      return;
    }
    setError(null);

    if (esRegistro) {
      registrar();
    } else {
      login();
    }
  };

  const login = useCallback(async () => {
    try {
      //login de usuario
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, pass);

      //console.log(res.user);

      //limpia formulario
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/admin");
    } catch (error) {
      //console.log(error);
      if (error.code === "auth/user-not-found") {
        setError("Usuario o contraseña incorrecta");
      }
      if (error.code === "auth/wrong-password") {
        setError("Usuario o contraseña incorrecta");
      }
    }
  }, [email, pass, props.history]);

  const registrar = useCallback(async () => {
    try {
      //crea nuevo usuario
      const auth = getAuth(app);
      const db = getFirestore(app);
      const res = await createUserWithEmailAndPassword(auth, email, pass);
      //console.log(res.user)

      //crea la coleccion usuarios
      /* await setDoc(doc(db, "usuarios", res.user.uid), {
        email: res.user.email,
        uid: res.user.uid,
      }); */

      //mezclado con el proyecto crud///////////////////////////
        await addDoc(collection(db, res.user.uid), {
        name: 'Tarea de ejemplo',
        fecha: Date.now()
      });
      ////////////////////////////////////////////////////////////
      //limpia formulario
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/admin");
    } catch (error) {
      //console.log(error)
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
        return;
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Usuario ya registrado...");
        return;
      }
    }
  }, [email, pass, props.history]);

  return (
    <div className="mt-5">
      <h3 className="text-center">
        {esRegistro ? "Registro de usuarios" : "Login de acceso"}
      </h3>
      
      <div className="login row justify-content-center mt-3">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}

            <input
              className="form-control mb-2"
              type="email"
              placeholder="Ingrese un email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="form-control mb-2"
              type="password"
              placeholder="Ingrese un password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />

            <div className="d-grid gap-2">
              <button className="btn btn-secondary btn-lg mb-2" type="submit">
                {esRegistro ? "Registrarse" : "Ingresar"}
              </button>
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-info btn-sm "
                onClick={() => setEsRegistro(!esRegistro)}
                type="button"
              >
                {esRegistro ? "Ya estas registrado?" : "No tienes cuenta?"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
