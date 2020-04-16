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
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center"><AccountCircleIcon style={{ fontSize: 70 }} /></h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-lg-4 mx-auto">
            <form noValidate autoComplete="off">
              <TextField fullWidth margin="normal" id="outlined" label="Username" variant="outlined" /><br />
              <TextField fullWidth margin="normal" id="outlined" label="Passwordnya" variant="outlined" />
            </form>
            <br />
            <Link href="/index">
              <Button fullWidth variant="outlined" color="primary" disableElevation>
                Masuk
              </Button>
            </Link>
          </div>
          <div className="col-12">
            
          </div>

        </div>
      </div>
    </div>
  )
};



export default Index 