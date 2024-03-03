import React, { useState } from "react";
import User from '/user.svg'

const Login = () => {

    const routeLocal = "http://localhost:3000"
    const routeInter = "https://userauthjwt.onrender.com"

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
    const route = routeInter + "/user/login";

    const handleLogin = async () => {
        try {
          const response = await fetch(route, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
    
          if (response.ok) {
            console.log("Usuario encontrado");
            const accessToken = response.headers.get('authorization')
            console.log('Tokens de Acceso:', accessToken)
            localStorage.setItem('accessToken', accessToken)
            alert('Sesión iniciada')
          }
        } catch (error) {
          console.error("Error al enviar datos de usuario: ", error);
        }
      };

  return (
    <div className="new-card">
      <div className="image">
        <img className="logo" src={User}  alt="" />
        <h2>Login</h2>
      </div>
      <div className="forms">
        <label>Email address</label>
        <input type="email" name="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <label>Password</label>
        <input type="password" name="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
      </div>
      <div className="options">
        <button className="option-btn" onClick={handleLogin}>Send</button>
      </div>
    </div>
  );
};

export default Login;
