import { useEffect, useState } from "react"
import { getTasks } from "../../api/api"
import { Task } from "../../types"
import { MenuList } from "@mui/material"
import AddDeleteTaskBtn from "../../components/AddDeleteTaskBtn"


function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([])
    useEffect(() => {
        getTasks().then((data) => setTasks(data))
    }, [])

    if (tasks.length === 1)  {
        return (
        <>
            <h1>Tasks page!</h1>
            <MenuList>{tasks[0].title}:  {tasks[0].description}</MenuList>
            <AddDeleteTaskBtn />
        </>
        )
    }
    return (
        <>
            <h1>Tasks page!</h1>
            {tasks.map(task =>
                <MenuList key={task._id}>{task.title}:  {task.description}</MenuList>
            )}
            <AddDeleteTaskBtn />
        </>
    )
}
export default Tasks
