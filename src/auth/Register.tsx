
import { FormControl } from "@mui/base/FormControl";
import { useState } from "react";
import { Button, Stack } from '@mui/material';
import StyledInput from '../components/StyledInput';
import HelperText from '../components/HelperText';
import Label from "../components/Label";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [password, setPassword] = useState("")
    async function handleRegisterUser() {
        try {
            const existingUsersResponse = await fetch("http://localhost:3000/users")
            const existingUsersData = await existingUsersResponse.json()
            for (let user of existingUsersData) {
                if (user.name === name) {
                    window.alert('User with this name already exists. Please choose a differen name!')
                    return
                }
            }
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                body: JSON.stringify({ name, age, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error("Whoops, registration failed")
            }
            const data = await response.json()
            window.alert('Congrates! You have registered successfully!')
            console.log(data)
            navigate('/login')
        } catch (err) {
            alert(err)
        }
    }
    return (
        <>
            <h1>Create Your Own Account to Plan Your Days</h1>
            <FormControl defaultValue="" required>
            <Label>Name</Label>
            <StyledInput placeholder="Write your name here" onChange={e => setName(e.target.value)}/>
            <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
            <Label>Age</Label>
            <StyledInput placeholder="Write your age here" onChange={e => setAge(Number(e.target.value))}/>
            <HelperText />
            </FormControl>
            <FormControl defaultValue="" required>
            <Label>Password</Label>
            <StyledInput type="password" placeholder="Write your password here" onChange={e => setPassword(e.target.value)}/>
            <HelperText />
            </FormControl>
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}} direction='row' spacing={4}>
                <Button variant='contained' size='large' onClick={handleRegisterUser}>REGISTER</Button>
                <Button variant='contained' size='large'>
                    <Link to='/login'>LOG IN</Link>
                </Button>
            </Stack>
        </>
    )
}

export default Register
