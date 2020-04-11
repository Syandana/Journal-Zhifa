import CardHeader from '@material-ui/core/CardHeader';


function Categories() {
  //const styles = useContainedCardHeaderStyles();
  return (
    <div className="container border">
      <div className="row">
        <div className="col">
          <CardHeader
            title="Desserts"
            subheader="Select your favourite"
          />
        </div>
        <div className="col-sm text-center btn bg-success">
          <i className="fas fa-hand-sparkles text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Rekomendasi PTN/PTS</p>
        </div>
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