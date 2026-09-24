import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/input";
import Button from "../components/button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="page login-page">
      <div className="logo-row">
        <div className="logo-box">
          <span className="logo-letter">G</span>
        </div>
        <span className="logo-text">
          <span style={{ fontSize: "24px" }}>Golden Crush</span><br />
          <span style={{ fontSize: "20px", letterSpacing: "0.1em" }}>BANK</span>
        </span>
      </div>

      <h1>Welcome Back</h1>
      <p>Log in to manage your money</p>

      <form onSubmit={handleLogin}>
        <Input
          label="Email address"
          type="email"
          icon={<Mail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          icon={<Lock size={16} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="forgot-link" onClick={() => navigate("/forgot-password")}>
          ForgetPassword?
        </span>

        <Button type="submit" variant="yellow">Log in</Button>
      </form>

      <div className="divider">
        <hr />
        <span>or continue with</span>
        <hr />
      </div>

      <div className="social-login">
  <Button variant="outline"><FaApple size={20} /> Apple</Button>
  <Button variant="outline"><FcGoogle size={20} /> Google</Button>
</div>

      <p className="signup-link">
        New to Golden Crush Bank?{" "}
        <span onClick={() => navigate("/signup")}>Create account</span>
      </p>
    </div>
  );
}

export default Login;