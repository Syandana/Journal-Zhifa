import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: "1",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



function Today() {
  //The Date
  var today = new Date();

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Minggu";
  weekday[1] = "Senin";
  weekday[2] = "Selasa";
  weekday[3] = "Rabu";
  weekday[4] = "Kamis";
  weekday[5] = "Jumat";
  weekday[6] = "Sabtu";
  var n = weekday[d.getDay()];

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.toLocaleString('default', { month: 'long' })); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {n}
      </Typography>
        <Typography variant="h5" component="h2">
          {dd}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {mm} {yyyy}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Today