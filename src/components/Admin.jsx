import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { withRouter } from "react-router";
import Firestore from "./Firestore";

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
      
      {user && (
        <Firestore user={user} />
      )}
    </div>
  );
};

export default withRouter(Admin);
