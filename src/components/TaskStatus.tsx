
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

function TaskStatus() {
  const [status, setStatus] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Box>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={"Not Started"}>Not Started</MenuItem>
          <MenuItem value={"In Progress"}>In Progress</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default TaskStatus
