import React, { useEffect, useState } from "react";

const Profile = () => {
  const [dataUser, setDataUser] = useState({});
  const [showData, setShowData] = useState(false);
  const getUser = async () => {
    const routeLocal = "http://localhost:3000";
    const routeInter = "https://userauthjwt.onrender.com";
    const route = routeInter + "/user/profile";
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
    <div className="profile">
      <div className="profile-t">
      <h2>Hello! If you want to see a response, press the button. If you don't see that text changed, then you need to logging.</h2>
      <button className="option-btn" onClick={getUser}><h2>Request</h2></button>
      {showData ? <h2>Your name is {dataUser.name}</h2> : <h2>Empty...</h2>}
      </div>
    </div>
  );
};

export default Profile;
