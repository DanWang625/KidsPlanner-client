import { Button, ButtonGroup } from "@mui/material"
import { useParams } from "react-router-dom"



function AddDeleteTaskBtn() {
    const params = useParams()
    console.log(params)
    async function handleAddNewTask() {

    }

    async function handleUpdateTask() {

    }

    async function handleDeleteTask() {

    }
    return (
        <>
        <ButtonGroup  size="large" sx={{ marginTop: 10, gap:10}}>
            <Button variant="contained" color="secondary" onClick={handleAddNewTask}>Add A New Task</Button>
            <Button variant="contained" onClick={handleUpdateTask}>Update</Button>
            <Button variant="contained" color="error" onClick={handleDeleteTask}>Delete</Button>
        </ButtonGroup>
        </>
    )
}

export default AddDeleteTaskBtn
