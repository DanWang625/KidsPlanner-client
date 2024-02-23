import { useParams } from "react-router-dom"
import { User } from "../../types"
import { useEffect, useState } from "react"
import { Task } from "../../types"
import { Button, ButtonGroup } from "@mui/material"

function UserDetail() {
    const params = useParams()
    // const id = (params.userId)?.split(":")[1]
    const [user, setUser] = useState<User>()
    const [err, setErr] = useState<Boolean>(false)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${params.userId}`)
        .then(res => res.json())
        .then(data => setUser(data.user))
        .catch(() => setErr(true))
    }, [])
    // console.log("user data:::::", )
    console.log(user?.tasks)
    if (!user) {
        return (
            <>loading......</>
        )
    }
    if (user.tasks === undefined) {
        return (
            <>
            <h1>Welcome {user.name}</h1>
            <h2>You are {user.age} years old</h2>
            <h3>You have {user.points || 0} points </h3>
            <h3>You have no task today</h3>
            </>
        )
    }

    return (
        <>
        <h1>Welcome {user.name}</h1>
        <h2>You are {user.age} years old</h2>
        <h3>You have {user.points || 0} points </h3>
        <h3>Your tasks for today:</h3>
        {(user.tasks).map(task =>
            <li>{task.title || null}</li>
        )}
        <ButtonGroup  sx={{ gap:10}}>
            <Button variant="contained" size="large">Add New Task</Button>
            <Button variant="contained" size="large" color="warning">Delete</Button>
        </ButtonGroup>

        </>
    )
}
export default UserDetail
