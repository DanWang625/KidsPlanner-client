import React from 'react';
import { Button, Card, CardActions, CardContent, styled} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";

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
    const params = useParams()
    console.log(params)
    async function handleUpdateUser() {

    }

    async function handleDeleteUser() {

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
                <NavLink to={`/users/${props.userId}`}>
                    <Button variant="outlined" color='secondary' onClick={handleDeleteUser}>
                        Delete user!
                    </Button>
                </NavLink>
            </CardActions>
        </StyledCard>
    )
}

export default UserCard
