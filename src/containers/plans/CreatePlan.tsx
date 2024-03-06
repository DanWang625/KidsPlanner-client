
import { useState } from "react";
import { Button, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import StyledInput from '../../components/StyledInput';
import HelperText from '../../components/HelperText';
import Label from "../../components/Label";
import { useNavigate, useParams } from "react-router-dom";

function CreatePlan() {
    const { userId } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskStatus, setTaskStatus] = useState("Not Started")

    async function handleCreatePlan() {
        const newTask = {
            title: taskTitle,
            description: taskDescription,
            status: taskStatus
        }
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}/plans`, {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description,
                    tasks:[newTask],
                    userId: userId
            }),
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
            navigate(`/users/${userId}/plans`)
        } catch (err) {
            alert(err)
        }
    }
    return (
        <>
            <h1>Create Your Plan</h1>

            <Label>Title</Label>
            <StyledInput placeholder="Write your title here" value={title} onChange={e => setTitle(e.target.value)}/>
            <HelperText />

            <Label>Description</Label>
            <StyledInput placeholder="Write your description here" value={description} onChange={e => setDescription(e.target.value)}/>
            <HelperText />

            <Label>Task Details</Label>
            <StyledInput placeholder="Write your task title" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />

            <StyledInput placeholder="Write your task description" value={taskDescription} onChange={e => setTaskDescription(e.target.value)}/>

            <Label>Task Status</Label>
            <RadioGroup
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                row
                // value={taskStatus}
                onChange={e => setTaskStatus(e.target.value as string)}
            >
                <FormControlLabel value="Not Started" control={<Radio />} label="Not Started" />
                <FormControlLabel value="In Progress" control={<Radio />} label="In Progress" />
                <FormControlLabel value="Finished" control={<Radio />} label="Finished" />
            </RadioGroup>
            {/* <Button variant='contained' size='small' onClick={handleAddTask}>Add Task</Button> */}
            {/* <Button
                sx={{ marginTop: 5}}
                variant="contained"
                onClick={() => {
                    setIsEditing(!isEditing)
                }}
            >
                Add Tasks
            </Button> */}
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}} direction='row' spacing={4}>
                <Button
                    variant='contained'
                    size='large'
                    onClick={async() => {handleCreatePlan()}}
                >
                    Create A New Plan
                </Button>
            </Stack>
        </>
    )
}

export default CreatePlan
