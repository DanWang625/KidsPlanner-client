import { useEffect, useState } from "react"
import { getPlans } from "../../api/api"
import { Plan } from "../../types"
import { Button, Paper } from "@mui/material"
import PlanCard from "../../components/PlanCard"
import { useParams } from "react-router-dom"

function Plans() {
    const params = useParams()
    const id = params.userId
    const [plans, setPlans] = useState<Plan[]>([])
    if (id) {
        useEffect(() => {
            getPlans(id).then((data) => setPlans(data))
        }, [])
    }
    return (
        <>
            <Paper sx={{ margin: 10 }}>
                <h1>Plans Page</h1>
                {plans.map((plan) =>
                     <PlanCard key={plan._id} planTitle={plan.title} planDescription={plan.description} planId={plan._id} userId={id || ""} />
                )}
                <Button></Button>
            </Paper>
        </>
        )
}
export default Plans
