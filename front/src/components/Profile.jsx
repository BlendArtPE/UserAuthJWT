import React, { useEffect, useState } from "react";

const Profile = () => {
  const [dataUser, setDataUser] = useState({});
  const [showData, setShowData] = useState(false);
  const getUser = async () => {
    const routeLocal = "http://localhost:3000";
    const routeInter = "https://userauthjwt.onrender.com";
    const route = routeLocal + "/user/profile";
    const token = localStorage.getItem("accessToken");

    try {
      const response = await fetch(route, {
        method: "GET",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setDataUser(userData);
        setShowData(true)
      } else {
        console.error(
          "Error al buscar usuario. Estado de la respuesta:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    console.log(dataUser)
  }, [dataUser]);

  return (
    <div>
      <h1>Hola</h1>
      <button onClick={getUser}>Solicitar</button>
      {showData ? <h1>Hay contenido, el autor es {dataUser.name}</h1> : <h1>No hay contenido</h1>}
    </div>
  );
};

export default Profile;
