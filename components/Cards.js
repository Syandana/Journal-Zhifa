function Cards() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 text-center btn bg-success">
          <i class="fas fa-peace text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Plegmatis</p>
        </div>
        <div className="col-6 text-center btn bg-success">
          <i class="fas fa-hand-sparkles text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Melankolis</p>
        </div>
        <div className="col-6 text-center btn bg-success">
          <i class="fas fa-fire text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Sanguinis</p>
        </div>
        <div className="col-6 text-center btn bg-success">
          <i class="fas fa-fist-raised text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Koleris</p>
        </div>
      </div>
    </div>
  )
}

export default Cards