import React from 'react'

export const Login = () => {
    return (
        <div className="mt-5">
           <h3 className="text-center"> Acceso o registro de usuario</h3>
           <hr />
           <div className="row justify-content-center">
               <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form>
                        <input 
                            className="form-control mb-2"
                            type="email"
                            placeholder="Ingrese un email"
                        />
                        <input 
                            className="form-control mb-2"
                            type="password"
                            placeholder="Ingrese un password"
                        />
                         
                         <div className="d-grid gap-2">
                            <button className="btn btn-dark btn-lg mb-2">
                                Resgistrarse
                            </button>   

                         </div>
                         <div className="d-grid gap-2">
                            <button className="btn btn-info btn-sm ">
                                Ya tienes cuenta?
                            </button>   

                         </div>
                    </form>
               </div>
           </div>
        </div>
    )
}
