import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import {getAllUsersThunk} from "../../services/user-thunks.js";
import {findArticlebyPredThunk} from "../../services/article-thunks";
import {registerThunk, updateUserThunk, deleteUserThunk} from "../../services/auth-thunks";
import {getUsersByPredThunk} from "../../services/user-thunks.js";

const UserManagement = () => {

    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [usernameToFind, setUsernameToFind] = useState('');
    const [usernameToDelete, setUsernameToDelete] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState("reviewer");
    const handleUsers = (someResult) => {
        if (someResult.error) {
            console.log("Error: ", someResult.error);
        } else {
            //console.log(someResult)
            setUsers(someResult.payload)
        }
    }
    const findUserHandler = async () => {
        try {
            await dispatch(getUsersByPredThunk(['username', usernameToFind])).then(result => alert(result))
            // TODO: return result and navigate to editable profile
        } catch (e) {
            console.log("Error: ", e);
            alert(e.response.data);
        }

    }
    const handleRegister = async (newUser) => {
        try {
            await dispatch(registerThunk(
                {
                    first: newUser.first,
                    last: newUser.last,
                    email: newUser.email,
                    type: newUser.type,
                    username: newUser.username,
                    password: newUser.password
                }
            ));
        } catch (e) {
            console.log("Error: ", e);
            alert(e.response.data);
        }
    };
    const handleUpdate = async (updatedUser) => {
        try {
            await dispatch(updateUserThunk({uid: updatedUser.id, user:updatedUser}));

        } catch (e) {
            console.log("Error ", e);
            alert(e.response.data);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if user already exists in state
        const existingUserIndex = users.findIndex((user) => user.username === username);
        if (existingUserIndex >= 0) {
            // Update existing user
            const updatedUser = { firstName, lastName, email, type, username, password };
            handleUpdate(updatedUser).then(result => console.log("Updated user: ", result));
        } else {
            // Add new user
            const newUser = { firstName, lastName, email, type, username, password };
            handleRegister(newUser).then(result => console.log(result))
        }
        // Clear form inputs
        setId('');
        setFirstName('');
        setLastName('');
            setEmail('');
        setType("reviewer");
        setUsername('');
        setPassword('');
    }
    const handleDelete = async () => {

        try{
            const userToDelete = await dispatch(getUsersByPredThunk(['username', usernameToDelete]));
            await dispatch(deleteUserThunk({user: userToDelete}));

        } catch (e) {
            console.log("Error ", e);
            alert(e.response.data);
        }
    }
    async function getData() {
        await dispatch(getAllUsersThunk()).then(result => handleUsers(result));
    }

    useEffect(() => {
        setUsers([]);
        getData();
    }, [])
    if (!users) {
        console.log("No users");
    }

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h3 className="display-4">User Management</h3>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Add User</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="form1FirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="form1LastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="form1Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="form1Type">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select" value={type} onChange={(event) => setType(event.target.value)}>
                                    <option value="reviewer">Reviewer</option>
                                    <option value="business">Business</option>
                                    <option value="admin">Admin</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </Form.Group>
                            <Button className="mt-2" variant="secondary" type="submit">Save</Button>
                        </Form>
                    </Col>
                    <Col>
                        <h4>Update User</h4>
                        <Form onSubmit={findUserHandler}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" onChange={(event) => setUsernameToFind(event.target.value)} />
                            </Form.Group>
                            <Button className="mt-2" variant="secondary" type="submit">Find User</Button>
                        </Form>
                    </Col>
                    <Col>
                        <h4>Delete User</h4>
                        <Form onSubmit={handleDelete}>
                            <Form.Group controlId="form3Username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={id} onChange={(event) => setFirstName(event.target.value)} />
                            </Form.Group>
                            <Button className="mt-2" variant="secondary" type="submit" >Delete User</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserManagement;


