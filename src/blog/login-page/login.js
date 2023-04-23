import React, { useState} from "react"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
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
        <div className="row">
            <div className="col-1"/>
            <div className="col-8">
                <div className="row">
                    <div className="d-flex mt-5">
                        <h4>
                            Please login
                        </h4>
                    </div>
                    <div>
                        <hr className="hr-style"/>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <form>
                        <label htmlFor="usernameInput" className="form-label mt-2">Username</label>
                        <input className="form-control"
                               type="text" id="usernameInput" value={username}
                               onChange={(event) => setUsername(event.target.value)}
                        />
                        <label htmlFor="passwordInput" className="form-label mt-2">Password</label>
                        <input className="form-control"
                               type="password" id="passwordInput" value={password}
                               onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className="mt-4 row">
                            <div className="col">
                                <button type="button" className="btn palette-bg-primary" onClick={handleLogin}>Submit
                                </button>
                            </div>
                            <div className="col">
                                <Link className="btn btn-outline-info" to="/register">Register</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;