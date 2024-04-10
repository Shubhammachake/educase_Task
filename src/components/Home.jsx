import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleGoSignUp = () => {
    navigate("/SignUp");
  };

  const handleGoLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="main">
      <div className="home">
        <h3>Welcome to PopX</h3>
        <div className="lorem">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <br />
        <div className="btns">
          <button id="btn1" onClick={handleGoSignUp}>
            Create Account
          </button>

          <button id="btn2" onClick={handleGoLogin}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
