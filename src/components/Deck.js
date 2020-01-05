import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    cursor: "pointer",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(14),
      position: "absolute"
    },
  },
}));

export default function SimplePaper({ style }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      style={style}
    >
      <Paper style={{ zIndex: 5, top: 0 }} elevation={3} />
      <Paper style={{ zIndex: 4, top: 2 }} elevation={3} />
      <Paper style={{ zIndex: 3, top: 4 }} elevation={3} />
      <Paper style={{ zIndex: 2, top: 6 }} elevation={3} />
      <Paper style={{ zIndex: 1, top: 8 }} elevation={3} />
      <Paper style={{ zIndex: 0, top: 10 }} elevation={3} />
    </Box
    >
  );
}
