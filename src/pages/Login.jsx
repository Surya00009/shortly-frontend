import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Login.css";

function Login(){

    const navigate = useNavigate();

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    async function handleLogin(e) {

    e.preventDefault();

    try {

        const response = await api.post("/api/auth/login", {
            email,
            password
        });

        console.log("SUCCESS:", response.data);

        localStorage.setItem("token", response.data.token);

        navigate("/dashboard");

    } catch (err) {

        console.log("FULL ERROR:", err);

        if (err.response) {
            console.log("Status:", err.response.status);
            console.log("Response:", err.response.data);
        } else {
            console.log("Message:", err.message);
        }

        alert("Login Failed");
    }
}

    return(

        <div className="login-container">

            <form
                className="login-card"
                onSubmit={handleLogin}>

                <h1>Shortly</h1>

                <p>Login to your account</p>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button>

                    Login

                </button>

                <div className="login-footer">
                    <p> New here?{" "} <Link to="/register"> Register </Link> </p>
                </div>

            </form>

        </div>

    );

}

export default Login;
