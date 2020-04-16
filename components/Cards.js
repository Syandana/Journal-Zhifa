import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Plegmatis</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Melankolis</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Sanguinis</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Koleris</Paper>
        </Grid>
      </Grid>
    </div>
  );
}