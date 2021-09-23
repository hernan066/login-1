import React , { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { withRouter } from "react-router";


const Admin = ({history}) => {
    
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if(user){
            console.log('Existe un usuario');
            setUsuario(user);
        }else{
            console.log('No existe usuario');
            history.push('/login')
        }
    }, [history]);
    
    return (
        <div>
            <h1>Admin</h1>
            <hr />
            <h2>Ruta pretegida</h2>
        </div>
    )
}

export default withRouter (Admin);




