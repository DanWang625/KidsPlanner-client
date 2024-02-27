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
    async function handleUpdateUser() {
    //     try {
    //         const response = await fetch(`http://localhost:3000/users/${props.userId}`, {
    //             method: 'PUT',
    //             headers: {
    //             'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, password }),
    //   })
    //     } catch (err) {
    //         console.log(err)
    //     }
    }

    const [err, setErr] = useState('')
    const [deleted, setDeleted] = useState(false)
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
        <StyledCard>
            <CardContent key={props.userId}>
                <h3>{props.userName}</h3>
                <p>{props.userAge}</p>
            </CardContent>
            <CardActions>
                <NavLink to={`/users/${props.userId}`}>
                    <Button variant="outlined">
                        Visit user Page!
                    </Button>
                </NavLink>
                <NavLink to={`/users/${props.userId}`}>
                    <Button variant="outlined" color='secondary' onClick={handleUpdateUser}>
                        Update user!
                    </Button>
                </NavLink>
                {/* <NavLink to={`/users/${props.userId}`}> */}
                    <Button variant="outlined" color='secondary' onClick={handleDeleteUser}>
                        Delete user!
                    </Button>
                {/* </NavLink> */}
            </CardActions>
        </StyledCard>
    )
}

export default UserCard
