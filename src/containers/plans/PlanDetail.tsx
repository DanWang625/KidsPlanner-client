import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Plan } from "../../types"
import { Card, List, ListItem, ListItemText } from "@mui/material"
import React from "react"
import Task from "../../components/Task"

function PlanDetail() {
    // const navigate = useNavigate()
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
                <h2>You have 1 task for {plan.title} </h2>
                <h3>do {plan.tasks[0].description} for {plan.tasks[0].title}</h3>
                {plan.tasks[0].status}
            </>
        )
    }
    return (
        <>
            <h2>You have {plan.tasks.length} tasks for {plan.title}</h2>
            {/* <List>
                {plan.tasks.map((task, index) =>
                    <React.Fragment key={index}>
                       <ListItem />

                        <ListItemText
                            primary={`${task.title}, ${task.description}`}
                        />
                            {task.status}

                    </React.Fragment>
                )}
            </List> */}
            {plan.tasks.map(task =>
            <Card key={task._id}>
                <Task
                    taskId={task._id}
                    taskTitle={task.title}
                    taskStatus={task.status}
                    description={task.description}
                />
            </Card>
            )}
        </>
    )
}
export default PlanDetail
