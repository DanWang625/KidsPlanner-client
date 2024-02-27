import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, styled} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { getUsers } from '../api/api';

interface UserProps {
    userName: string;
    userAge: number;
    userId: string;
}

const StyledCard = styled(Card)`
    margin: 40px auto;
    width: 60%;
    background-color: #b67fc5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    `
function UserCard(props: UserProps) {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [err, setErr] = useState('')
    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)
    async function handleUpdateUser() {
        try {
            const response = await fetch(`http://localhost:3000/users/${props.userId}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            })
            if (!response.ok) {
                throw new Error('Failed to update user')
            }
            setUpdated(true)
        } catch (err) {
            setErr(err)
        }
    }
    if (updated) {
        navigate(`/users/${props.userId}`)
    }

    async function handleDeleteUser() {
        try {
            const response = await fetch(`http://localhost:3000/users/${props.userId}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error('Failed to delete user')
            }
        setDeleted(true)
        } catch (err) {
            setErr(err)
        }
    }
    if (deleted) {
        window.alert('deleted user succssfully')
        navigate('/')
    }
    return (
        <StyledCard key={props.userId}>
            <CardContent>
                <h3>{props.userName}</h3>
                <p>{props.userAge}</p>
            </CardContent>
            <CardActions>

                <Button variant="outlined" onClick={() => navigate(`/users/${props.userId}`)}>
                    Visit user Page!
                </Button>

                <Button variant="outlined" color='secondary' onClick={handleUpdateUser}>
                    Update user!
                </Button>

                <Button variant="outlined" color='error' onClick={handleDeleteUser}>
                    Delete user!
                </Button>

            </CardActions>
        </StyledCard>
    )
}

export default UserCard
