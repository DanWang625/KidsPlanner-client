import React, { useEffect, useState } from "react";
import { User } from "../../types";
import { getUsers } from "../../api/api";
import UserCard from "../../components/UserCard";
import { Paper } from "@mui/material";



function Users() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        getUsers().then((data) => setUsers(data))
    }, [])
    return (
        <>
            <Paper sx={{ margin: 10 }}>
                <h1>Users Page</h1>
                {users.map((user) =>
                    <UserCard key={user._id} userName={user.name} userAge={user.age} userId={user._id} />
                )}
            </Paper>
        </>
    )
}

export default Users
