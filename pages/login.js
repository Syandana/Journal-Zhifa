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
        <div className="row">
          <div className="col">
            <h2 className="text-center"><AccountCircleIcon style={{ fontSize: 70 }} /></h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm">
            <form noValidate autoComplete="off">
              <TextField fullWidth
                margin="normal" id="outlined" label="Username" variant="outlined" /><br />
              <TextField fullWidth
                margin="normal" id="outlined" label="Passwordnya" variant="outlined" />
            </form>
          </div>
          <div className="col-sm">
            <Link href="/index">
              <Button fullWidth variant="outlined" color="primary" disableElevation>
                Masuk
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  )
};



export default Index 