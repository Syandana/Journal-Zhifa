import Link from 'next/link';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const useStyles = makeStyles({
  root: {
    width: "1",
  },
});

function NavigationBottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="fixed-bottom">
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link href="/index"><BottomNavigationAction label="Beranda" icon={<HomeRoundedIcon />} /></Link>
        <Link href="/jurnal-saya"><BottomNavigationAction label="Jurnal saya" icon={<MenuBookRoundedIcon />} /></Link>
        <BottomNavigationAction label="Artikel" icon={<DescriptionRoundedIcon />} />
        <Link href="/login"><BottomNavigationAction label="Akun" icon={<AccountCircleRoundedIcon />} /></Link>
      </BottomNavigation>
    </div>
  )
};

export default NavigationBottom