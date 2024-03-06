import { useEffect, useState } from "react"
import { getNotifications } from "../../api/api"
import { useNavigate, useParams } from "react-router-dom"
import { Notification  } from "../../types"
import { List } from "@mui/material"

function MyNotifications() {
    const params = useParams()
    const id = params.userId
    const [MyNotifications, setMyNotifications] = useState<Notification[]>([])
    if (id) { useEffect(() => {
        getNotifications(id).then((data) => {
            setMyNotifications(data)
        })
    }, [])}
    for (let notification of MyNotifications) {
        if (notification.user._id === id) {
            if (MyNotifications.length === 0) {
                return (
                    <>
                        <h2>Notification Page</h2>
                        <h3>No message</h3>
                    </>
                )
            }
            return (
                <>
                    <h2>Notification Page</h2>
                    <h3>your messages: </h3>
                    {MyNotifications.map(noti =>
                        <List key={noti._id}>{noti.message}</List>
                        )}
                </>
            )
        }
    }
    return (
        <>
            <h2>Notification Page</h2>
            <h3>No message</h3>
        </>
    )
}

export default MyNotifications
