
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

export async function getPlans(userId: string) {
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}/plans`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const plans = await response.json()
        return plans
    } catch (err) {
        alert(err)
    }
}

export async function getNotifications() {
    try {
        const response = await fetch("http://localhost:3000/notifications", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const notifications = await response.json()
        return notifications
    } catch (err) {
        alert(err)
    }
}
