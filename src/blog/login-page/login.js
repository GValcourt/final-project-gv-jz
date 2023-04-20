import React from "react"
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/profile");
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
                    <button onClick={handleLogin}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;