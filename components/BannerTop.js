import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function BannerTop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <h2 className="text-success">Halo, Wendy!</h2>
          <p>Mau ngapain hari ini?</p>
        </Grid>
        <Grid item xs={4}>
          <h2 className="text-right"><AccountCircleIcon style={{ fontSize: 70 }} /></h2>
        </Grid>
      </Grid>
    </div>
  )
}

export default BannerTop