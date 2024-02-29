
import { FormControl } from "@mui/base/FormControl";
import { useState } from "react";
import { Button, Stack } from '@mui/material';
import StyledInput from '../../components/StyledInput';
import HelperText from '../../components/HelperText';
import Label from "../../components/Label";
import { useParams } from "react-router-dom";
import { Task } from "../../types";
import React from "react";

function CreatePlan() {
    const { userId } = useParams()
    // const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState<Task[]>([])

    function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const newTasks = [...tasks]
        newTasks[index] = { ...newTasks[index], title: e.target.value }
        setTasks(newTasks)
    }
    async function handleCreatePlan() {
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}/plans`, {
                method: "POST",
                body: JSON.stringify({ title, description, tasks }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log("response>>>>>", response)
            if (!response.ok) {
                throw new Error("Whoops, registration failed")
            }
            const data = await response.json()
            window.alert('Congrates! You have created a plan successfully!')
            console.log(data)
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
            <StyledInput placeholder="Write your title here" onChange={e => setTitle(e.target.value)}/>
            <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
            <Label>Description</Label>
            <StyledInput placeholder="Write your description here" onChange={e => setDescription(e.target.value)}/>
            <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
            <Label>Task</Label>
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
            </FormControl>
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}} direction='row' spacing={4}>
                <Button variant='contained' size='large' onClick={handleCreatePlan}>Create</Button>
            </Stack>
        </>
    )
}

export default CreatePlan
