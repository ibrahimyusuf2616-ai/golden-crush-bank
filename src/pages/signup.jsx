import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock, ChevronLeft } from "lucide-react";
import Input from "../components/input";
import Button from "../components/button";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="page signup-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ChevronLeft size={20} />
      </button>

      <h1>Create Your account</h1>
      <p className="step-text">Step 1 of 1 - It takes two minutes</p>

      <form onSubmit={handleSignup}>
        <Input label="Full name" icon={<User size={16} />} value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <Input label="Email address" type="email" icon={<Mail size={16} />} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Phone Number" type="tel" icon={<Phone size={16} />} value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Input label="Create Password" type="password" icon={<Lock size={16} />} value={password} onChange={(e) => setPassword(e.target.value)} />

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I agree to the terms of the services and privacy policy of Golden Crush Bank
        </label>

        <Button type="submit" variant="yellow">Create account</Button>
      </form>

      <p className="login-link">
        Already have an account? <span onClick={() => navigate("/")}>Log in</span>
      </p>
    </div>
  );
}

export default Signup;