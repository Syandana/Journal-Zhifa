import React from 'react';
import BannerTop from '../components/BannerTop'
import NavigationBottom from '../components/NavigationBottom'
import { makeStyles } from '@material-ui/core/styles'

import Date from './Today'
import Check from './Check'


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

  return (
    <div>
      <BannerTop />
      <br />
      <h5 className="text-success">Hari ini</h5>
      <Date />
      <br />
      <h5 className="text-success">Tugas kamu</h5>
      <Check />
      <NavigationBottom />
    </div>
  )
};



export default Index 