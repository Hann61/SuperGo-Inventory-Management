import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/users/reducer'
const StyledContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around
`;

export const NameInput = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: Math.round(Math.random() * 10000), name }));
        setName('');
    };

    return (
        <StyledContainer
            component='form'
            onSubmit={handleSubmit}
        >
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            <Button type='submit' className='submitBtn'>Please enter your name</Button>
        </StyledContainer>
    );
};

export default NameInput;
