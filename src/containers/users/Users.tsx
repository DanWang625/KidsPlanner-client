import React, { useEffect, useState } from "react";
import { User } from "../../types";
import { getUsers } from "../../api/api";
import UserCard from "../../components/UserCard";


function Users() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        getUsers().then((data) => setUsers(data))
    }, [])
    return (
        <>
        <h1>Users Page</h1>
        {users.map((user) =>
            <UserCard userName={user.name} userAge={user.age} userId={user._id} />
        )}

        </>
    )
}

export default Users
