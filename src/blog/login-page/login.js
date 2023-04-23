import React, { useState} from "react"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../services/auth-thunks.js";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        if ((username === undefined || username === "" ) && ( password === undefined || password === "")) {
            alert("Please fill in all fields");
            return;
        }
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/home");
        } catch (e) {
            alert(e);
        }
    };

    return(
        <div className="d-flex align-items-center">
            <form>
                <label>
                    <p>Username</p>
                    <input className="form-control"
                           type="text" value={username}
                           onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input className="form-control"
                           type="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <div>
                    <button className="btn btn-primary" type="button" onClick={handleLogin}>Submit</button>
                </div>
                <div>
                    <Link className="btn btn-primary" to={"/register"}>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;