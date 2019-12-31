import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from "../styles";

export default function Field() {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <Typography component="div" className={classes.mainField}>
        MAIN
      </Typography>
      <Typography component="div" className={classes.sideField}>
        SIDE
      </Typography>
    </Box>
  );
}
