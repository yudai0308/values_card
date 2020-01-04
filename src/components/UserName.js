import React from 'react';
import { Box } from '@material-ui/core';

export default function UserName({ name, style }) {
  return (
    <Box style={style}>
      {name}
    </Box>
  );
}
