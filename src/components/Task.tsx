import { Button, List, ListItem } from "@mui/material";
import { TaskProps } from "../types";

function Task(props: TaskProps) {
    return (
        <>
            <List sx={{ display: "flex", justifyItems: "center", marginLeft: 20, marginRight: 20 }} key={props.taskId}>
                <ListItem>{props.taskTitle}</ListItem>
                <ListItem>{props.description}</ListItem>
                <ListItem>{props.taskStatus}</ListItem>
            </List>
            <Button variant="contained">Edit</Button>
            <Button variant="contained">Delete</Button>
        </>
    )
}
export default Task
