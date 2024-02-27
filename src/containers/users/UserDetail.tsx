import { useNavigate, useParams } from "react-router-dom"
import { User } from "../../types"
import { useEffect, useState } from "react"
import { Button, MenuList } from "@mui/material"

function UserDetail() {
    const navigate = useNavigate()
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

    if (!user) {
        return (
            <>loading......</>
        )
    }

    return (
        <>
            <h1>Welcome {user.name}</h1>
            <h2>You are {user.age} years old</h2>
            <Button variant="contained" onClick={() => navigate(`/users/${params.userId}/plans`)}>Click to check your plans</Button>
        </>
    )
}
export default UserDetail
