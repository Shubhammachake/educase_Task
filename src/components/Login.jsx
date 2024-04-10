import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Check if email and password are filled
    if (!data.email || !data.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Check if email matches
      if (userData.email === data.email) {
        // If email matches, check password
        if (userData.password === data.password) {
          // If password matches, allow login
          alert("Login successful!");
          // Set username and email in local storage
          localStorage.setItem("userEmail", userData.email);
          localStorage.setItem("username", userData.fullname);
          // Navigate to Info page
          navigate("/Info");
          // Redirect user to dashboard or desired page
          // For now, just reload the page
          window.location.reload();
        } else {
          setError("Wrong password.");
        }
      } else {
        setError("User not found. Please sign up.");
      }
    } else {
      setError("User not found. Please sign up.");
    }
  };

  return (
    <div className="cont">
      <div className="head">
        <h3>Signin to your PopX account</h3>
      </div>
      <div className="my-loremtext">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p className="paraName">
        Email address <span style={{ color: "red" }}>*</span>
      </p>
      <input
        type="email"
        id="email-field"
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e)}
      />
      <p className="paraName">
        Password <span style={{ color: "red" }}>*</span>
      </p>
      <input
        type="password"
        id="pass-field"
        name="password"
        value={data.password}
        onChange={(e) => handleChange(e)}
      />
      <button className="login-button" id="login" onClick={handleLogin}>
        Login
      </button>
      <Link to="/SignUp">
        <h4 style={{ textAlign: "center" }}> Back to Signup</h4>
      </Link>
    </div>
  );
}
