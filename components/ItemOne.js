import Cards from '../components/Cards'
import Search from '../components/Search'
import BannerTop from '../components/BannerTop'
import Categories from '../components/Categories'
import DailyChallange from '../components/DailyChallange'

function ItemOne() {
  return (
    <div>
      <BannerTop />
      <Search />
      <br />
      <h5 className="text-success">Seminar online nih, daftar yuk!</h5>
      <Categories />
      <br />
      <h5 className="text-success">Mana nih yang kamu banget?</h5>
      <Cards />
      <br />
      <DailyChallange />
      <br />
      <br />
    </div>
  )
};

export default ItemOne 