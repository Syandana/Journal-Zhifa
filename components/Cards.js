function Cards() {

  return (
    <div className="container overflow-auto">
      <div className="row">
        <div className="col">
          <h5 className="text-success">Mana nih yang kamu banget?</h5>
        </div>
      </div>
      <div className="row">
        <div className="col text-center neu btn mx-1 bg-success">
          <i class="fas fa-peace text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Plegmatis</p>
        </div>
        <div className="col text-center neu btn mx-1 bg-success">
          <i class="fas fa-hand-sparkles text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Melankolis</p>
        </div>
        <div className="col text-center neu btn mx-1 bg-success">
          <i class="fas fa-fire text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Sanguinis</p>
        </div>
        <div className="col text-center neu btn mx-1 bg-success">
          <i class="fas fa-fist-raised text-white fa-lg"></i>
          <br />
          <p className="statusName text-white">Koleris</p>
        </div>
      </div>
    </div>
  )
}

export default Cards