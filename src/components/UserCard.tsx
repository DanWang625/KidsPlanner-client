import React from 'react';
import { Button, Card, CardActions, CardContent, styled} from "@mui/material";
import { NavLink } from "react-router-dom";

interface UserProps {
    userName: string;
    userAge: number;
    userId?: string;
}


const StyledCard = styled(Card)`
    margin: 20px;
`
function SellerCard(props: UserProps) {
    return (
        <StyledCard>
            <CardContent>
                <h3>{props.userName}</h3>
                <p>{props.userAge}</p>
            </CardContent>
            <CardActions>
                <NavLink to={`/users/${props.userId}`}>
                    <Button variant="outlined">
                        Visit user Page!
                    </Button>
                </NavLink>
            </CardActions>
        </StyledCard>
    )
}

export default SellerCard
