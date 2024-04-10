import React from "react";
import { useNavigate } from "react-router-dom";
export default function Info() {
  // Retrieve username and email from local storage
  const userEmail = localStorage.getItem("userEmail");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="cont" id="info-cont">
      <div className="a">
        <div className="imgcont">
          {" "}
          <img
            src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            alt="error"
          />
        </div>
        <div className="resize">
          <h4>{username}</h4>
          <br />
          <p style={{ marginTop: "-30px" }}>{userEmail}</p>
        </div>
      </div>
      <div className="b">
        <h6>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
          Aliquyam Erat, Sed Diam
        </h6>
      </div>
      <button className="logout" onClick={handleLogout}>
        LogOut
      </button>
    </div>
  );
}
