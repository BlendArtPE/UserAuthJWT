import React, { useState } from "react";
import User from '/user.svg'

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
    const route = "http://localhost:3000/user/login";

    const handleLogin = async () => {
        try {
          const response = await fetch(route, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          console.log(response)
    
          if (response.ok) {
            console.log("Usuario encontrado");
            const data = await response.json()
            console.log(data)
            alert('Eres ' + data.name)
          } else {
            alert('Cuenta errónea')
            console.error("Error al buscar usuario");
          }
        } catch (error) {
          console.error("Error al enviar datos de usuario: ", error);
        }
      };

  return (
    <div className="new-card">
      <div className="image">
        <img src={User} style={{ scale: "200%" }} alt="" />
      </div>
      <div className="forms">
        <h2>Login</h2>
        <label>Email address</label>
        <input type="email" name="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <label>Password</label>
        <input type="password" name="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
      </div>
      <div className="options">
        <button className="login" onClick={handleLogin}>Send</button>
      </div>
    </div>
  );
};

export default Login;
