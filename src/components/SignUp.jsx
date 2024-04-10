import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    companyname: "",
    agency: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if any field is empty
    for (const key in data) {
      if (data[key] === "") {
        setError("Please fill in all fields");
        return;
      }
    }

    // Check if email already exists in local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const existingUsers = JSON.parse(storedUserData);
      if (existingUsers.email === data.email) {
        alert("User with this email already exists. Please login.");
        return;
      }
    }

    // Save data to local storage
    localStorage.setItem("userData", JSON.stringify(data));

    // Show alert pop-up
    alert("Sign up successful!");

    // Redirect the user to the login page
    window.location.href = "/Login";
  };

  return (
    <div className="cont">
      <div className="head">
        <h3>Create your PopX account</h3>
      </div>
      <form onSubmit={handleSignUp}>
        <p className="paraName">
          Full Name <span style={{ color: "red" }}>*</span>
        </p>
        <input type="text" name="fullname" onChange={handleChange} />
        <p className="paraName">
          Phone number <span style={{ color: "red" }}>*</span>
        </p>
        <input type="tel" name="phone" onChange={handleChange} />
        <p className="paraName">
          Email address <span style={{ color: "red" }}>*</span>
        </p>
        <input type="email" name="email" onChange={handleChange} />
        <p className="paraName">
          Password <span style={{ color: "red" }}>*</span>
        </p>
        <input type="password" name="password" onChange={handleChange} />
        <p className="paraName">
          Company name <span style={{ color: "red" }}>*</span>
        </p>
        <input type="text" name="companyname" onChange={handleChange} />
        <p className="my-agency">
          Are you an Agency ?<span style={{ color: "red" }}>*</span>
        </p>

        <div id="r-cont">
          {" "}
          <input
            id="yes"
            type="radio"
            name="agency"
            value="Yes"
            onChange={handleChange}
            className="radioButton"
          />
          <label htmlFor="yes">Yes</label>
          <input
            id="no"
            type="radio"
            name="agency"
            value="No"
            onChange={handleChange}
            className="radioButton"
          />
          <label htmlFor="no">No</label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="create-button">
          Create Account
        </button>
        <Link to="/Login">
          <h4 style={{ textAlign: "center" }}> Back to Login</h4>
        </Link>
      </form>
    </div>
  );
}
// i am here
