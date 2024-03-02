import React, { useState } from "react";
import User from "/user.svg";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const route = "http://localhost:3000/user/register";

  const handleRegister = async () => {
    try {
      const response = await fetch(route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("Usuario registrado");
      } else {
        console.error("Error al registrar");
      }
    } catch (error) {
      console.error("Error al enviar datos: ", error);
    }
  };

  return (
    <div className="new-card">
      <div className="image">
        <img src={User} style={{ scale: "200%" }} alt="" />
      </div>
      <div className="forms">
        <h2>Register</h2>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={(e) => setUser({...user, name:e.target.value})}/>
        <label>Email address</label>
        <input type="email" name="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <label>Password</label>
        <input type="password" name="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
      </div>
      <div className="options">
        <button className="register" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
