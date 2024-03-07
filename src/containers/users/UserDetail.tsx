import { useNavigate, useParams } from "react-router-dom"
import { User } from "../../types"
import { useEffect, useState } from "react"
import { Button, ButtonGroup } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'

function UserDetail() {
    const navigate = useNavigate()
    const params = useParams()
    // const id = (params.userId)?.split(":")[1]
    const [user, setUser] = useState<User>()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    // const [password, setPassword] = useState("")
    const [err, setErr] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${params.userId}`)
        .then(res => res.json())
        .then(data =>{
            setUser(data.user)
            setAge(data.user.age)
            setName(data.user.name)
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
                body: JSON.stringify({ name, age }),
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
                    Click to create new plans
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsEditing(!isEditing)
                    }}
                >
                    Edit User
                    <EditIcon/>
                </Button>
                {/* <Button variant="contained" onClick={handleDeleteUser}>Delete</Button> */}
            </ButtonGroup>
            {
                isEditing&&
                (
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                        {/* <input type="text" value={age} onChange={(e) => setPassword(e.target.value)}/> */}
                        <Button variant="contained" onClick={async() => {
                            await handleUserSave()
                            setIsEditing(false)
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
