import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { withRouter } from "react-router";

const Admin = ({ history }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user1 = auth.currentUser;
    if (user1) {
      console.log("Existe un usuario");
      setUser(user1);
    } else {
      console.log("No existe usuario");
      history.push("/login");
    }
  }, [history]);

  return (
    <div>
      <h1>Admin</h1>
      <hr />
      <h2>Ruta pretegida</h2>
      {user && <h3>{user.email}</h3>}
    </div>
  );
};

export default withRouter(Admin);
