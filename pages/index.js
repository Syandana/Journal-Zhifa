import Layout from '../components/Layout'
import Link from 'next/link';
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: "1",
  },
});

function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm">
            <h1>Hi!</h1>
            <img src="/sitting.png"></img>
            <h4>Kenali dirimu<br/>sekarang juga</h4>
            <Link href="/home">
              <Button variant="outlined" color="primary" disableElevation>
                Mulai Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
};



export default Index 