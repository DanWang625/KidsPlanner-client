import React, { useEffect, useState } from "react";
import { User } from "../../types";
import { getUsers } from "../../api/api";
import { Card, Typography } from "@mui/material";

function Users() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        getUsers().then((data) => setUsers(data))
    }, [])
    return (
        <>
        <h1>Users Page</h1>
        {users.map((user) =>
            <Card variant="outlined" key={user._id}> {user.name}  </Card>
        )}

        </>
    )
}

export default Users
