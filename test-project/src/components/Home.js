import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const addacount = () => {
    navigate("Addacount");
  };
  return (
    <div>
      <h1 className="heading">Welcomee</h1>
      <button
        style={{
          marginLeft: "46%",
          color: "white",
          backgroundColor: "rgba(132, 38, 191,1)",
        }}
        className="btn "
        onClick={addacount}
      >
        AddAccount
      </button>
      <Outlet />
    </div>
  );
}

export default Home;
