import react, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import StyledInput from '../components/StyledInput';
import Label from '../components/Label';
import HelperText from '../components/HelperText';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../api/api';


export default function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  let id: string
  async function handleUserLogin() {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      })
      const existingUsers = await getUsers()
      for (let user of existingUsers) {
        if (user.name === name) {
          id = user._id
        }
      }

      if (response.ok) {
        window.alert('Congrates! You have logged in successfully!')
        navigate(`/users/${id}`)
      } else {
        window.alert('Invalud name or password, please try again!')
      }
    } catch (err) {
      alert(err)
    }
  }


  return (
    <>
    <h1>Please log in!</h1>
    <FormControl>
        <FormControl defaultValue="" required>
            <Label>Name</Label>
            <StyledInput placeholder="Write your name here" onChange={e => setName(e.target.value)}/>
            <HelperText />
        </FormControl>
        <FormControl defaultValue="" required>
            <Label>Password</Label>
            <StyledInput type="password" placeholder="Write your password here" onChange={e => setPassword(e.target.value)}/>
            <HelperText />
        </FormControl>
        <Button sx={{marginTop: 5}} variant='contained' onClick={handleUserLogin}>LOG IN</Button>
    </FormControl>
    </>
  )
}
