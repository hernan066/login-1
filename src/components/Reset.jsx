import React, { useCallback, useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { withRouter } from "react-router";

const Reset = (props) => {
    
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const procesarDatos = (e) => {
        e.preventDefault();
        if (!email.trim()) {
          //console.log('Ingrese email');
          setError("Ingrese email");
          return;
        }
        
        setError(null);
        recuperar();
       
      };

      const recuperar = useCallback(async()=>{
            try {
                const auth = getAuth();
                await sendPasswordResetEmail(auth, email);
                console.log("Correo enviado");
                props.history.push('/login');
            } catch (error) {
                console.log(error);
                setError(error.message);
            }
      }, [email, props.history]);
    
    
    return (
        <div className="mt-5">
        <h3 className="text-center">
         Reiniciar contraseña
        </h3>
        
        <div className="login row justify-content-center mt-3">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={procesarDatos}>
              {error && <div className="alert alert-danger">{error}</div>}
  
              <input
                className="form-control mb-2"
                type="email"
                placeholder="Ingrese un email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              
  
              <div className="d-grid gap-2">
                <button className="btn btn-secondary btn-sm mb-2" type="submit">
                  Reiniciar contraseña
                </button>
              </div>
              
              
            </form>
          </div>
        </div>
      </div>
    )
}

export default withRouter(Reset)
