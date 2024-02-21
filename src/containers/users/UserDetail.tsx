import { useParams } from "react-router-dom"
import { User } from "../../types"
import { useEffect, useState } from "react"
import { Task } from "../../types"

function UserDetail() {
    const params = useParams()
    const [user, setUser] = useState<User>()
    const [err, setErr] = useState<Boolean>(false)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${params.userId}`)
        .then(res => res.json())
        .then(data => setUser(data.UserDetails))
        .catch(() => setErr(true))
    }, [])

    if (!user) {
        return (
            <>loading......</>
        )
    }
    return (
        <>
        <h1>{user.name}</h1>
        <h3>{user.age}</h3>
        <p>You have {user.points} points </p>
        <p>Your tasks for today:</p>
        {(user.tasks).map((task) => {
            <li>task</li>
        })}
        </>
    )
}
