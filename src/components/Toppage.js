import React from "react";
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Toppage() {
  return (
    <Typography component="div" variant="h4">
      <Box
        height={500}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box m={2}><Link style={{color: "lightgrey"}} to="/single">ひとりで遊ぶ</Link></Box>
        <Box m={2}><Link style={{color: "lightgrey"}} to="/room">みんなで遊ぶ</Link></Box>
        <Box m={2}><Link style={{color: "lightgrey"}} to="/about">遊び方</Link></Box>
      </Box>
    </Typography>
  );
}
