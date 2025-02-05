import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import Gallery from '../Gallery/Gallery'
import Card from '../Card/Card'

const Home = () => {
  return (
    <div>
      <Layout>
       <Hero/>
       <Card/>
       <Gallery/>
       
      </Layout>
    </div>
  )
}

export default Home