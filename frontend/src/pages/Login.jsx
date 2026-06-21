import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {
      console.log(error.response?.data);
      console.log(error);

      alert("Login Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      <p style={{ marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;