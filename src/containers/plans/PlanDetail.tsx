import { useNavigate, useParams } from "react-router-dom"

import { Button, MenuList } from "@mui/material"
import { useEffect, useState } from "react"
import { Plan, Task } from "../../types"

function PlanDetail() {
    const navigate = useNavigate()
    const params = useParams()
    // const id = (params.userId)?.split(":")[1]
    const [plan, setPlan] = useState<Plan>()
    const [err, setErr] = useState<Boolean>(false)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${params.userId}/plans`)
        .then(res => res.json())
        .then(data => setPlan(data.plan))
        .catch(() => setErr(true))
    }, [])

    if (!plan) {
        return (
            <>loading......</>
        )
    }

    return (
        <>
            <h1>Your plan {plan.title}</h1>
            <h2>{plan.description}</h2>
            <h2>You have {(plan.tasks).length} tasks</h2>
            <Button variant="contained" onClick={() => navigate(`/users/${params.userId}/plans/${plan._id}`)}>Click to see details</Button>
        </>
    )
}
export default PlanDetail
