import React, {useState} from "react"
import {registerThunk} from "../../services/auth-thunks";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import { ErrorBoundary } from "react-error-boundary";


const RegisterComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        try {
            await dispatch(registerThunk(
                {
                    first: document.getElementById('firstNameInput').value,
                    last: document.getElementById('lastNameInput').value,
                    email,
                    type: document.getElementById("typeSelect").value,
                    username,
                    password
                }
            ));
            navigate("/profile");
        } catch (e) {
            console.log("Error: ", e);
            alert(e.response.data);
        }
    };

    return(
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <div className="container">
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-8">
                        <div className="d-flex mt-5">
                            <h4>
                                Welcome!
                            </h4>
                        </div>
                        <div>
                            <hr className="hr-style"/>
                        </div>
                        <form>
                            <div className="row mb-2">
                                <label htmlFor="firstNameInput" className="form-label mt-2">First Name</label>
                                <div className="mw-2">
                                    <input className="form-control"
                                           type="text" id="firstNameInput" value={firstName}
                                           onChange={(event) => {
                                               setFirstName(event.target.value);
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="lastNameInput" className="form-label mt-2">Last Name</label>
                                <div className="mw-2">
                                    <input className="form-control"
                                           type="text" id="lastNameInput" value={lastName}
                                           onChange={(event) => setLastName(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="emailInput" className="form-label mt-2">Email Address</label>
                                <div className="mw-2">
                                    <input className="form-control"
                                           type="text" id="emailInput" value={email}
                                           onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="typeSelect" className="form-label mt-2">Select User Type</label>
                                <select className="form-select" id="typeSelect" value={type}
                                        onChange={e => {
                                            if (e.target.value === "sysadmin") {

                                            }
                                            setType(e.target.value);
                                        }}>
                                    <option value="reviewer">Reviewer</option>
                                    <option value="business">Business Owner</option>
                                    <option value="sysadmin">Admin</option>
                                </select>
                            </div>
                            <div className="row mb-2">
                                <div className="form-group">
                                    <label htmlFor="usernameInput" className="form-label mt-2">Username</label>
                                    <div className="mw-2">
                                        <input className="form-control"
                                               type="text" id="usernameInput" value={username}
                                               onChange={(event) => setUsername(event.target.value)}
                                        />
                                    </div>
                                    <div className="invalid-feedback">Sorry, that username's taken.</div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label htmlFor="passwordInput" className="form-label mt-2">Create Password</label>
                                <div className="mw-2">
                                    <input className="form-control"
                                           type="password" id="passwordInput" value={password}
                                           onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="btn palette-btn-blue" type="button" onClick={handleRegister}>Complete
                                    Signup
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default RegisterComponent;