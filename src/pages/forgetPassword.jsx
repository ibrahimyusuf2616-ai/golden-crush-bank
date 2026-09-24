import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, Mail } from "lucide-react";
import Input from "../components/input";
import Button from "../components/button";
import Header from "../components/header";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    navigate("/"); // back to login after "sending" the code
  };

  return (
    <div className="page forgot-password-page">
      <Header variant="back" onBack={() => navigate(-1)} />

      <div className="key-icon-box">
  <KeyRound size={48} color="#FFFFFF" />
</div>
      <h1>Forget Password?</h1>
      <p>No worries - enter the email linked to your account and we'll send a reset code</p>

      <form onSubmit={handleReset}>
        <Input
          label="Email address"
          type="email"
          icon={<Mail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="yellow">Send reset code</Button>
      </form>

      <p className="login-link">
        Remember your password? <span onClick={() => navigate("/")}>Log in</span>
      </p>
    </div>
  );
}

export default ForgetPassword;