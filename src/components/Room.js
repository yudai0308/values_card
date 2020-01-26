import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  section: {
    margin: theme.spacing(3, 2),
  },
}));

export default function Room() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        {/* <Grid container alignItems="center">
          <Grid item xs> */}
        <Typography gutterBottom variant="h4">
          TEST ROOM
        </Typography>
        {/* </Grid>
          <Grid item> */}
        <Typography gutterBottom variant="h6">
          $4.50
        </Typography>
        {/* </Grid>
        </Grid> */}
        <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
          hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
    </Box>
  );
}
