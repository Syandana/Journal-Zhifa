import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

const DailyChallange = () => (
  <div className="container bg-warning">
    <div className="row py-4">
      <div className="col">
        <p className="text-center"><ConfirmationNumberIcon style={{ fontSize: 100 }} /></p>
      </div>
      <div className="col my-auto">
        <h4 className="text-center">Ikuti daily challange dan dapatkan tiket seminar GRATIS!</h4>
        <a className="btn btn-light">Ikut dong</a>
      </div>
    </div>
  </div>
)

export default DailyChallange