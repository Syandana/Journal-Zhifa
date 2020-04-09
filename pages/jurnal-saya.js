import React from 'react';
import Layout from '../components/Layout'
import BannerTop from '../components/BannerTop'
import NavigationBottom from '../components/NavigationBottom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

function Index() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Layout>
      <br />
      <BannerTop />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5 className="text-success">Hari ini</h5>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Minggu
                      </Typography>
                      <Typography variant="h5" component="h2">
                        1
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Desember 2019
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div class="carousel-item">
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Minggu
                      </Typography>
                      <Typography variant="h5" component="h2">
                        1
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Desember 2019
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div class="carousel-item">
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Minggu
                      </Typography>
                      <Typography variant="h5" component="h2">
                        1
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Desember 2019
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5 className="text-success">Jadwal kamu</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Hari ini
                </Typography>
                <List className={classes.root}>
                  {[0, 1, 2, 3,].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <NavigationBottom />
    </Layout>
  )
};



export default Index 