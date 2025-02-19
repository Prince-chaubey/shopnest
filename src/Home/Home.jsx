import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import Gallery from '../Gallery/Gallery'
import Card from '../Card/Card'
import PopularProducts from '../PopularProducts/PopularProducts'

const Home = ({handleCart}) => {
  return (
    <div>
      <Layout>
       <Hero/>
       <Card/>
       <PopularProducts handleCart={handleCart}/>
       <Gallery/>
       
      </Layout>
    </div>
  )
}

export default Home