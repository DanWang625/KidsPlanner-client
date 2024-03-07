import { useEffect, useState } from "react"
import { getNotifications } from "../../api/api"
import { useNavigate, useParams } from "react-router-dom"
import { Notification  } from "../../types"
import { Button, List } from "@mui/material"

function MyNotifications() {
    const navigate = useNavigate()
    const { userId } = useParams()
    const [myNotifications, setMyNotifications] = useState<Notification[]>([])
    if (userId) { useEffect(() => {
        getNotifications(userId).then((data) => {
            setMyNotifications(data)
        })
    }, [])}
    return (
        <>
        <h1>Notifications Page</h1>
            {myNotifications.some(noti => noti.user._id === userId) ? (
                <>
                <h3>Your messages:</h3>
                {myNotifications
                    .filter(notification => notification.user._id === userId)
                    .map(notification => (
                        <List sx={{ fontSize: 25 }} key={notification._id}>{notification.message}</List>
                ))}
                </>
            ) : (
                <h3>No message</h3>
            )}
            <Button sx={{ marginTop: 5 }} variant="contained" onClick={() => navigate(`/users/${userId}/plans`)}>Check Plans</Button>
        </>
    )
}

export default MyNotifications
