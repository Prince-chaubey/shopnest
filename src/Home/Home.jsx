import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import Gallery from '../Gallery/Gallery'

const Home = () => {
  return (
    <div>
      <Layout>
       <Hero/>
       <Gallery/>
      </Layout>
    </div>
  )
}

export default Home