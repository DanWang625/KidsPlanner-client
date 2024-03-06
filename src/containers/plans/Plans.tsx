import { useEffect, useState } from "react"
import { getPlans } from "../../api/api"
import { Plan } from "../../types"
import { Button, Paper } from "@mui/material"
import PlanCard from "../../components/PlanCard"
import { useNavigate, useParams } from "react-router-dom"

function Plans() {
    const navigate = useNavigate()
    const { userId } = useParams()
    const [plans, setPlans] = useState<Plan[]>([])
    if (userId) {
        useEffect(() => {
            getPlans(userId).then((data) => {
                console.log(data)
                setPlans(data)
            })
        }, [])
    }
    return (
        <>
            <h1>Plans Page</h1>
            <Paper sx={{ margin: 10 }}>
                    {plans.map(plan => {
                        if (plan.user !== null && plan.user._id === userId) {
                            return (
                                <PlanCard
                                    key={plan._id}
                                    planTitle={plan.title}
                                    planDescription={plan.description}
                                    planId={plan._id}
                                    userId={userId}
                                />
                            );
                        }
                        return null
                    })}
                </Paper>
                {plans.every(plan => plan.user === null || plan.user._id !== userId) && (
                    <Paper sx={{ margin: 10 }}>
                        <h2>You haven't created any plans yet</h2>
                        <Button
                            variant="contained"
                            onClick={() => navigate(`/users/${userId}/plans/create`)}
                        >
                            Create your plans now
                        </Button>
                    </Paper>
                )}
            </>
        );
    }
export default Plans
