import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Card, Button } from 'react-bootstrap';

const AdminComponent = () => {
    const currentUser = useSelector(state => state.auth.currentUser);
    const isAdmin = currentUser && currentUser.user_type === 'sysadmin';
    const navigate = useNavigate();
    if (!isAdmin) {
        return(
            <div>
                <p>
                    You must be an admin to view this page.
                </p>
            </div>
        )
     }

    return (
        <div className="container m-3">
            <h2 className="display-4 font-24">Admin Page</h2>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>User Management</Card.Title>
                    <Card.Text>View, add, edit, or delete user accounts.</Card.Text>
                    <Button variant="secondary">Go to User Management</Button>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>System Settings</Card.Title>
                    <Card.Text>View or modify system settings.</Card.Text>
                    <Button variant="secondary">Go to System Settings</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AdminComponent;
