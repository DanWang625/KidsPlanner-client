import { useParams } from "react-router-dom"
import { User } from "../../types"
import { useEffect, useState } from "react"
import AddDeleteTaskBtn from "../../components/AddDeleteTaskBtn"
import { MenuList } from "@mui/material"

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
                <AddDeleteTaskBtn />
            </>
        )
    }
    if (user.tasks.length === 1) {
        // const task = user.tasks[0]
        return (
            <>
                <h1>Welcome {user.name}</h1>
                <h2>You are {user.age} years old</h2>
                <h3>You have {user.points || 0} points </h3>
                {/* <h3>Your task is: {task}</h3> */}
                <AddDeleteTaskBtn />
            </>
        )
    }

    return (
        <>
            <h1>Welcome {user.name}</h1>
            <h2>You are {user.age} years old</h2>
            <h3>You have {user.points || 0} points </h3>
            <h3>Your tasks for today:</h3>
            {/* {(user.tasks).map((task, index) =>
                <MenuList key={index}>{task.title || null}</MenuList>
            )} */}
            {/* <p>{user.tasks}</p> */}
            <AddDeleteTaskBtn />
        </>
    )
}
export default UserDetail
