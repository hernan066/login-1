import React, { useState } from "react";



export const Login = () => {
  
    const [email, setEmail] = useState("");
    const [pass,  setPass] = useState("");
    const [error, setError] = useState(null);
    const [esRegistro, setEsRegistro] = useState(true);
  
    //procesarDatos
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!email.trim()){
            //console.log('Ingrese email');
            setError('Ingrese email');
            return;
        };
        if(!pass.trim()){
            //console.log('Ingrese password');
            setError('Ingrese password');
            return;
        };
        if(pass.length < 6){
            //console.log('El password debe tener 6 caracteres minimo');
            setError('El password debe tener 6 caracteres minimo');
            return;
        };
        setError(null);
    }
    return (
    <div className="mt-5">
      <h3 className="text-center"> 
        {
            esRegistro ? 'Registro de usuarios' : 'Login de acceso'
        }
      </h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={handleSubmit}>
            {
                error && (
                    <div className="alert alert-danger">{error}</div>
                                        
                )
            }
            
            <input
              className="form-control mb-2"
              type="email"
              placeholder="Ingrese un email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="form-control mb-2"
              type="password"
              placeholder="Ingrese un password"
              onChange={e => setPass(e.target.value)}
              value={pass}
            />

            <div className="d-grid gap-2">
              <button className="btn btn-dark btn-lg mb-2" type= "submit">
                    {
                        esRegistro ? 'Registrarse' : 'Ingresar'
                    }
              </button>
            </div>
            <div className="d-grid gap-2">
              <button 
                className="btn btn-info btn-sm "
                onClick={()=> setEsRegistro(!esRegistro)}
                type="button"
              >
                {
                    esRegistro ? 'Ya estas registrado?' : 'No tienes cuenta?'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
