import { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import toast from "react-hot-toast"; 
import api from "../services/api"; 
import "../styles/Login.css"; 

function Register() { 
  const navigate = useNavigate(); 
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  async function handleRegister(e) { 
    e.preventDefault(); 
    try { 
      const response = await api.post("/api/auth/register", { fullName, email, password }); 
      toast.success("Registration Successful!"); 
      setTimeout(() => { 
        navigate("/"); 
      }, 1000); 
    } catch (error) { 
      console.log("REGISTER ERROR:", error); 
      console.log(error.response?.data); 
      toast.error( 
        error.response?.data?.message || "Registration Failed" 
      ); 
    } 
  } 

  return ( 
    <div className="auth-container"> 
      <div className="auth-card"> 
        <h1>Shortly</h1> 
        <h2>Create Account</h2> 
        <form onSubmit={handleRegister}> 
          <input 
            type="text" 
            placeholder="Full Name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          /> 
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          /> 
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          /> 
          <button type="submit"> Register </button> 
        </form> 
        <p style={{ marginTop: "20px" }}> 
          Already have an account? {" "} 
          <Link to="/"> Login </Link> 
        </p> 
      </div> 
    </div> 
  ); 
} 

export default Register;
