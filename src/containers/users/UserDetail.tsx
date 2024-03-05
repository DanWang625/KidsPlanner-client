import { useNavigate, useParams } from "react-router-dom"
import { User } from "../../types"
import { useEffect, useState } from "react"
import { Button, ButtonGroup } from "@mui/material"

function UserDetail() {
    const navigate = useNavigate()
    const params = useParams()
    // const id = (params.userId)?.split(":")[1]
    const [user, setUser] = useState<User>()
    const [username, setUsername] = useState("")
    const [userage, setUserage] = useState("")
    const [err, setErr] = useState<Boolean>(false)
    const [updated, setUpdated] = useState<Boolean>(false)
    const [isEditing, setIsEditing] = useState<Boolean>(false)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${params.userId}`)
        .then(res => res.json())
        .then(data =>{
            setUser(data.user)
            setUserage(data.user.age)
            setUsername(data.user.name)
        })
        .catch(() => setErr(true))
    }, [])

    if (!user) {
        return (
            <>loading......</>
        )
    }

    async function handleUserSave() {
        try {
            const response = await fetch(`http://localhost:3000/users/${params.userId}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, userage }),
            })
            if (!response.ok) {
                throw new Error('Failed to update user')
            }
            setUpdated(true)
        } catch (err) {
            setErr(err)
        }
    }
    if (updated) {
        window.alert('user was updated')
        // navigate(`/users/${params.userId}`)
    }

    return (
        <>
            <h1>Welcome {user.name}</h1>
            <h2>You are {user.age} years old</h2>
            <ButtonGroup sx={{ gap: 10}}>
                <Button
                    variant="contained"
                    onClick={() => navigate(`/users/${params.userId}/plans`)}
                >
                    Click to check your plans
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate(`/users/${params.userId}/plans/create`)}
                >
                    Click to create your plans
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsEditing(!isEditing)
                    }}
                >
                    Edit User
                </Button>
                {/* <Button variant="contained" onClick={handleDeleteUser}>Delete</Button> */}
            </ButtonGroup>
            {
                isEditing&&
                (
                    <div>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <input type="text" value={userage} onChange={(e) => setUserage(e.target.value)}/>
                        <Button variant="contained" onClick={() => {
                            setIsEditing(false)
                            handleUserSave()
                            }}
                        > Save</Button>
                        <Button variant="contained" onClick={() => setIsEditing(false)}> Cancel </Button>
                    </div>
                )
            }
        </>
    )
}
export default UserDetail
