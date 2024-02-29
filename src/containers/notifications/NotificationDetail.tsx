import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Notification } from '../../types'
import { Button } from "@mui/material"

function NotificationDetail() {
    const navigate = useNavigate()
    const {userId, id} = useParams()
    const [notification, setNotification] = useState<Notification>()
    const [err, setErr] = useState<Boolean>(false)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${userId}/notifications/${id}`)
        .then(res => res.json())
        .then(data => setNotification(data.notification))
        // .then(data => console.log(data))
        .catch(error => setErr(error))
    }, [])

    if (!notification) {
        window.alert(err)
    }

    if (notification) {
        return (
            <>
                <h2>Your message: {notification.message}</h2>
                <Button variant="contained" onClick={() => navigate(`http://localhost:3000/users/${userId}`)}>Back to user page</Button>
            </>
        )
    }
    return (
        <>
            No messages now, please check later!
        </>
    )
}
export default NotificationDetail
