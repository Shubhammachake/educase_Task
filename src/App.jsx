import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Info from "./components/Info";

export default function App() {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Info" element={userEmail ? <Info /> : <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
