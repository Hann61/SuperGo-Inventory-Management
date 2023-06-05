import React from 'react';
import styled from '@emotion/styled';
import { Chip } from '@mui/material';

const StyledChip = styled(Chip)`
  margin: 0.5rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
`;

export const NameChip = ({ name }) => {
    return <StyledChip label={`${name}`} />;
};
