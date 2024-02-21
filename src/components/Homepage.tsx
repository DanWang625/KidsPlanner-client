
import React, { useState } from 'react';
import { Container, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom'
import CreateUser from '../containers/users/CreateUser';
// import { Calendar } from 'react-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

function Homepage() {
    const currentDate = new Date().toDateString(); // Get the present date in YYYY-MM-DD format
    // const [value, onChange] = useState<Value>(new Date());
    return (
        <>
            <Container>
                <h1>Welcome to Kids Planner!</h1>
                <h2>  Today is {currentDate} </h2>
                <h3>Are you ready to plan your day?</h3>
                <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} direction='row' spacing={4}>
                    <Button variant='contained' size='large'>
                        <Link to='/register'>CREATE YOUR ACCOUNT</Link>
                    </Button>
                    <Button variant='contained' size='large'>
                        <Link to='/login'>LOGIN</Link>
                    </Button>
                </Stack>
                {/* <Calendar onChange={onChange} value={value} /> */}
            </Container>
        </>
    )
}

export default Homepage;
