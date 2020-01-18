import React from 'react';
import MyValues from './MyValues';
import ValueInput from './ValueInput';
import { Box } from "@material-ui/core";

export default function ResultPage() {
  return (
    <Box display="flex" flexDirection="row" m={2}>
      <MyValues />
      <ValueInput />
    </Box>
  )
}
