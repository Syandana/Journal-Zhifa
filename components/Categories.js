const Categories = () => (
  <div className="container ">
    <h5 className="text-success">Buat Kamu</h5>

    <div className="row">
      <div className="col text-center btn mx-1 bg-success">
        <i class="fas fa-peace text-white fa-lg"></i>
        <br />
        <p className="statusName text-white">Apa aja</p>
      </div>
      <div className="col text-center btn mx-1 bg-success">
        <i class="fas fa-hand-sparkles text-white fa-lg"></i>
        <br />
        <p className="statusName text-white">Rekomendasi PTN/PTS</p>
      </div>
      <div className="col text-center btn mx-1 bg-success">
        <i class="fas fa-fire text-white fa-lg"></i>
        <br />
        <p className="statusName text-white">Seminar Online</p>
      </div>
      <div className="col text-center btn mx-1 bg-success">
        <i class="fas fa-fist-raised text-white fa-lg"></i>
        <br />
        <p className="statusName text-white">Tes Kepribadian</p>
      </div>
    </div>
  </div>
)

export default Categories