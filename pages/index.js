import Layout from '../components/Layout'
import Cards from '../components/Cards'
import Search from '../components/Search'
import Button from '@material-ui/core/Button'

function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="today">test</h6>
            <Button variant="contained" color="primary">Hello World</Button>
          </div>
        </div>
      </div>
      <br />
      <Search />
      <Cards />
    </Layout>
  )
};



export default Index 