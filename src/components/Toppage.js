import React from "react";
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

export default function Toppage() {
  return (
    <Typography component="div">
      <Link to="/single">Single</Link>
      TOPPAGE
    </Typography>
  );
}
