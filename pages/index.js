import Layout from '../components/Layout'
import Cards from '../components/Cards'
import Search from '../components/Search'
import BannerTop from '../components/BannerTop'
import Categories from '../components/Categories'
import DailyChallange from '../components/DailyChallange'
import Button from '@material-ui/core/Button'

function Index() {
  return (
    <Layout>
      <br />
      <BannerTop />
      <Search />
      <br />
      <Categories />
      <br />
      <Cards />
      <br />
      <DailyChallange />
    </Layout>
  )
};



export default Index 