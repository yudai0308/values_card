import React from "react";
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { field } from '../conf'

export default function Toppage() {
  return (
    <Typography component="div" variant="h4">
      <Box
        height={field.height}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box m={2}><Link style={{ color: "#2d3436" }} to="/single">ひとりで遊ぶ</Link></Box>
        <Box m={2}><Link style={{ color: "#2d3436" }} to="/room">みんなで遊ぶ</Link></Box>
        <Box m={2}><Link style={{ color: "#2d3436" }} to="/about">遊び方</Link></Box>
        <Box m={2}><Link style={{ color: "#2d3436" }} to="/test">Test</Link></Box>
      </Box>
    </Typography>
  );
}
