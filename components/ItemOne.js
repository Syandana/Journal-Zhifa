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
      <Categories />
      <br />
      <Cards />
      <br />
      <DailyChallange />
    </div>
  )
};

export default ItemOne 