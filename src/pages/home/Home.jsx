import React from 'react'
import "./style.scss"
import Hero from '../../Component/Hero/Hero'
import Trending from '../Trending/Trending'
import Popular from '../popular/Popular'
import TopRated from '../top-rated/TopRated'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <div style={{height: 1000}}></div>
    </div>
  )
}

export default Home
