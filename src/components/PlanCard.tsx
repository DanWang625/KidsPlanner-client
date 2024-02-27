import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, styled} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { getUsers } from '../api/api';

interface PlanProps {
    userId: string;
    planTitle: string;
    planDescription: string;
    planId: string;
}

const StyledCard = styled(Card)`
    margin: 40px auto;
    width: 60%;
    background-color: #b67fc5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    `
function PlanCard(props: PlanProps) {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [err, setErr] = useState('')
    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)
    async function handleUpdatePlan() {
        try {
            const response = await fetch(`http://localhost:3000/users/${props.userId}/plans/${props.planId}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            })
            if (!response.ok) {
                throw new Error('Failed to update plan')
            }
            setUpdated(true)
        } catch (err) {
            setErr(err)
        }
    }
    if (updated) {
        navigate(`users/${props.userId}//plans/${props.planId}`)
    }

    async function handleDeletePlan() {
        try {
            console.log('Deleting plan:', props.planId);
            const response = await fetch(`http://localhost:3000/users/${props.userId}/plans/${props.planId}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error('Failed to delete plan')
            }
        setDeleted(true)
        } catch (err) {
            setErr(err)
        }
    }
    if (deleted) {
        window.alert('deleted plan succssfully')
        navigate('/plans')
    }
    return (
        <StyledCard key={props.planId}>
            <CardContent>
                <h3>{props.planTitle}</h3>
                <p>{props.planDescription}</p>
            </CardContent>
            <CardActions>
                <Button variant="outlined" onClick={() => navigate(`/users/${props.userId}/plans/${props.planId}`)}>
                    Visit plan Page!
                </Button>

                <Button variant="outlined" color='secondary' onClick={handleUpdatePlan}>
                    Update plan!
                </Button>

                <Button variant="outlined" color='error' onClick={handleDeletePlan}>
                    Delete plan!
                </Button>
            </CardActions>
        </StyledCard>
    )
}

export default PlanCard