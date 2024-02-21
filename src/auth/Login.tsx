import react, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import StyledInput from '../components/StyledInput';
import Label from '../components/Label';
import HelperText from '../components/HelperText';
import { Button } from '@mui/material';
import { getUsers } from '../api/api';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function handleUserLogin() {
    try {
      const user = await getUsers()
      window.alert('Congrates! You have logged in successfully!')
      console.log(user)
      navigate('/users/:id')
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
