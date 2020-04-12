import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Layout from '../components/Layout'
import ItemOne from '../components/ItemOne'
import ItemTwo from '../components/ItemTwo'
import ItemThree from '../components/ItemThree'
import ItemFour from '../components/ItemFour'
import Login from '../components/Login'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <TabPanel value={value} index={0}>
        <ItemOne />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ItemTwo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ItemThree />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Login />
      </TabPanel>

      <div className="border fixed-bottom">
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Beranda" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction label="Jurnal saya" icon={<MenuBookRoundedIcon />} />
          <BottomNavigationAction label="Artikel" icon={<DescriptionRoundedIcon />} />
          <BottomNavigationAction label="Akun" icon={<AccountCircleRoundedIcon />} />
        </BottomNavigation>
      </div>
    </Layout>
  );
}