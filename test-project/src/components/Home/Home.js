import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const addacount = () => {
    navigate("Addacount");
  };
  return (
    <div>
      <h1 className="heading">Welcome</h1>
      <button type="submit"
        style={{
          marginLeft: "46%",
          color: "white",
          backgroundColor: "rgba(132, 38, 191,1)",
        }}
        className="btn " id="btn"
        onClick={addacount}
      >
        AddAccount
      </button>
      <Outlet />
    </div>
  );
}

export default Home;
