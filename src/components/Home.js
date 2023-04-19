import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashBoardContent from "./DashBoardContent";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let username = localStorage.getItem("username");
    if (username == "" || username == null || username == "undefined") {
      console.log(username);
      navigate("/register");
    }
  }, []);

  const HandleLogout = () => {
    localStorage.removeItem("username");
  };

  return (
    <div>
      <div className="header bg-secondary">
        <Link to={"/"}>Home</Link>
        <Link onClick={HandleLogout} className="float-end" to={"/register"}>
          {" "}
          Logout{" "}
        </Link>
      </div>
      <DashBoardContent />
    </div>
  );
};

export default Home;
