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
