import React, { useState } from 'react'

const Reset = () => {
    
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const procesarDatos = (e) => {
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
                <button className="btn btn-secondary btn-lg mb-2" type="submit">
                  Reiniciar contraseña
                </button>
              </div>
              
              
            </form>
          </div>
        </div>
      </div>
    )
}

export default Reset
