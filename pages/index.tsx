import type { NextPage } from 'next'
import Layout from '../src/components/Layout'
import FavoritesList from "../src/components/FavoritesList";

const Home: NextPage = () => {
  return (
      <Layout>
        <div className="m-auto container pt-8 md:pt-14">
          <h1 className="font-semibold text-center text-primary text-2xl md:text-3xl mb-4 md:mb-0">
            Listas de favoritos
          </h1>
          <FavoritesList />
        </div>
      </Layout>
  )
}

export default Home
