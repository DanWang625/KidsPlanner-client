import { Button, ButtonGroup } from "@mui/material"



function AddDeleteTaskBtn() {
    return (
        <>
        <ButtonGroup  size="large" sx={{ marginTop: 10, gap:10}}>
            <Button variant="contained" color="secondary">Add A New Task</Button>
            <Button variant="contained">Update</Button>
            <Button variant="contained" color="error">Delete</Button>
        </ButtonGroup>
        </>
    )
}

export default AddDeleteTaskBtn
