import { useEffect, useState } from "react"
import { getNotifications } from "../../api/api"
import { useNavigate, useParams } from "react-router-dom"
import { Notification  } from "../../types"
import { Button } from "@mui/material"
import React from "react"

function MyNotifications() {
    const navigate = useNavigate()
    const params = useParams()
    // console.log(params)
    const id = params.userId
    const [MyNotifications, setMyNotifications] = useState<Notification[]>([])
    if (id) { useEffect(() => {
        getNotifications(id).then((data) => setMyNotifications(data))
    }, [])}
    return (
        <>
            <h2>Notification Page</h2>
            {MyNotifications.map((noti, index) =>
                <React.Fragment key={index}>
                    <p>{noti.message}</p>
                    <Button
                        variant="contained"
                        onClick={() => navigate(`/users/${noti.user._id}/plans`)}
                    >
                        Check Your Tasks
                    </Button>
                </React.Fragment>
            )}
        </>
    )
}

export default MyNotifications
