export async function getUsers() {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const users = await response.json()
        return users
    } catch (err) {
        alert(err)
    }
}

export async function getTasks() {
    try {
        const response = await fetch("http://localhost:3000/tasks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const tasks = await response.json()
        return tasks
    } catch (err) {
        alert(err)
    }
}

export async function getRewards() {
    try {
        const response = await fetch("http://localhost:3000/rewards", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const rewards = await response.json()
        return rewards
    } catch (err) {
        alert(err)
    }
}
