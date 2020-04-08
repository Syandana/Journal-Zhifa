import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const BannerTop = () => (
  <div className="container">
    <div className="row">
      <div className="col my-auto">
        <h2 className="text-success">Halo, Wendy!</h2>
        <p>Mau ngapain hari ini?</p>
      </div>
      <div className="col my-auto">
        <h2 className="text-right"><AccountCircleIcon style={{ fontSize: 70 }}/></h2>
      </div>
    </div>
  </div>
)

export default BannerTop