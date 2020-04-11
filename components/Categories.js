import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

function Categories() {
  //const styles = useContainedCardHeaderStyles();
  const styles = useCoverCardMediaStyles();
  return (
    <div className="container border">
      <div className="row">
        <div className="col">
          <CardHeader
            title="Desserts"
            subheader="Select your favourite"
          />
        </div>
        <Box position={'relative'} width={'100%'} height={'100%'} p={2}>
          <CardMedia
            // component={'img'} // add this line to use <img />
            // image={"src"}
            classes={styles}
          />
          <Box position={'relative'}>
            <h3>Placeholder</h3>
            <p>To show that the image is a cover.</p>
          </Box>
        </Box>
        <div className="col-sm text-center btn bg-success">
          <i className="fas fa-fire text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Seminar Online</p>
        </div>
        <div className="col-sm text-center btn bg-success">
          <i className="fas fa-fist-raised text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Tes Kepribadian</p>
        </div>
      </div>
    </div>

  )
}

export default Categories