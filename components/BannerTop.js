import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const BannerTop = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <p>15 November 2019</p>
        <h2 className="text-success">Halo, Wendy!</h2>
        <p>Mau ngapain hari ini?</p>
      </div>
      <div className="col">
        <p className="text-right"><AccountCircleIcon style={{ fontSize: 100 }}/></p>
      </div>
    </div>
  </div>
)

export default BannerTop