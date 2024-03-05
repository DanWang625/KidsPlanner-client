
import { FormControl } from "@mui/base/FormControl";
import { useState } from "react";
import { Button, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import StyledInput from '../../components/StyledInput';
import HelperText from '../../components/HelperText';
import Label from "../../components/Label";
import { useParams } from "react-router-dom";
import { Task } from "../../types";

function CreatePlan() {
    const { userId } = useParams()
    // const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState<Task[]>()
    // const [taskId, setTaskId] = useState("")
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskStatus, setTaskStatus] = useState("Not Started")

    function handleAddTask() {

        const newTask = { title: taskTitle, description: taskDescription, status: taskStatus}
        if (taskTitle && taskDescription && taskStatus) {
            setTasks(newTask)
        } else {
            alert("detail missing")
        }
        setTaskTitle("")
        setTaskDescription("")
        setTaskStatus("Not Started")
    }



    async function handleCreatePlan() {
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}/plans`, {
                method: "POST",
                body: JSON.stringify({ title, description, tasks }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            // console.log("response>>>>>", response)
            if (!response.ok) {
                console.log("Failed to create plan", response.statusText)
                alert('Failed to create plan. Please try again later.')
            }
            const data = await response.json()
            window.alert('Congrates! You have created a plan successfully!')
            console.log("Your new plan>>>>>>>", data)
            // navigate('/login')
        } catch (err) {
            alert(err)
        }
    }
    return (
        <>
            <h1>Create Your Plan</h1>
            <FormControl defaultValue="" required>
            <Label>Title</Label>
            <StyledInput placeholder="Write your title here" value={title} onChange={e => setTitle(e.target.value)}/>
            <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
            <Label>Description</Label>
            <StyledInput placeholder="Write your description here" value={description} onChange={e => setDescription(e.target.value)}/>
            <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
            <Label>Task Details</Label>
            <StyledInput placeholder="Write your task title" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
            </FormControl>
            <FormControl defaultValue="" required>
            <StyledInput placeholder="Write your task description" value={taskDescription} onChange={e => setTaskDescription(e.target.value)}/>
            </FormControl>
            <FormControl defaultValue="" required>
            <Label>Task Status</Label>
            <RadioGroup
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                row
                value={taskStatus}
                onChange={e => setTaskStatus(e.target.value as string)}
            >
                <FormControlLabel value="not started" control={<Radio />} label="Not Started" />
                <FormControlLabel value="in progress" control={<Radio />} label="In Progress" />
                <FormControlLabel value="finished" control={<Radio />} label="Finished" />
            </RadioGroup>
            <Button variant='contained' size='small' onClick={handleAddTask}>Add Task</Button>
            </FormControl>
            {/* {tasks.map((task, index) => (
                <React.Fragment key={index}>
                    <StyledInput
                        placeholder="Write your task here"
                        value={task.title}
                        onChange={e => handleTaskChange(e, index)}
                    />
                    <HelperText />
                </React.Fragment>
            ))} */}
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}} direction='row' spacing={4}>
                <Button variant='contained' size='large' onClick={handleCreatePlan}>Create A New Plan</Button>
            </Stack>
        </>
    )
}

export default CreatePlan
