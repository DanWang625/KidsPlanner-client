import react, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import StyledInput from '../components/StyledInput';
import Label from '../components/Label';
import HelperText from '../components/HelperText';
import { Button } from '@mui/material';

export default function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


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
        <Button sx={{marginTop: 5}} variant='contained'>LOG IN</Button>
    </FormControl>
    </>
  )
}
