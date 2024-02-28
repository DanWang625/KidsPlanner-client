import { useNavigate, useParams } from "react-router-dom"

import { useEffect, useState } from "react"
import { Plan } from "../../types"
import TaskStatus from "../../components/TaskStatus"
import { List, ListItem, ListItemText } from "@mui/material"

function PlanDetail() {
    const navigate = useNavigate()
    const { userId, id } = useParams()
    const [plan, setPlan] = useState<Plan>()
    const [err, setErr] = useState<Boolean>(false)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${userId}/plans/${id}`)
        .then(res => res.json())
        .then(data => setPlan(data.plan))
        // .then(data => console.log(data.plan))
        .catch(error => setErr(error))
    }, [])
    if (!plan) {
        return "loading......"
    }
    if (plan.tasks.length === 1) {
        return (
            <>
                <h2>You have 1 task for ${plan.title} </h2>
                <h3>do {plan.tasks[0].description} for {plan.tasks[0].title}</h3>
                <TaskStatus />
            </>
        )
    }
    return (
        <>
            <h2>You have {plan.tasks.length} tasks for {plan.title}</h2>
            <List>
                {plan.tasks.map((task, index) =>
                    <>
                       <ListItem key={index} />
                       <ListItemText primary={`${task.title}, ${task.description}`} />
                       <TaskStatus />
                    </>
                )}
            </List>

        </>
    )
}
export default PlanDetail
