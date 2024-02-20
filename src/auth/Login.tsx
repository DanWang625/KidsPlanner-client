import react, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import StyledInput from '../components/StyledInput';
import Label from '../components/Label';
import HelperText from '../components/HelperText';
import { getUsers } from '../api/api';
import { User } from '../types';
import StyledMenuItem from '../components/StyledMenuItem';
import { Button } from '@mui/material';

export default function Login() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        getUsers().then((data) => setUsers(data))
    }, [])
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    setName(e.target.value);
  };

  return (
    <>
    <h1>Please log in!</h1>
    <FormControl>
      <FormControl defaultValue="" required>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="name"
          onChange={handleChange}
        >
            {users.map((user) =>

                <StyledMenuItem key={user._id} value={user.name}>{user.name}</StyledMenuItem>

            )}
        </Select>
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
