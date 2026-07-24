import React from 'react'
import HeroSlider from '../components/HeroSlider'
import WelcomeBanner from '../components/WelcomeBanner'
import Categories from '../components/Categories'

const Home = () => {

  return (
<div className='px-4 py-6 sm:px-6 sm:py-10 lg:px-10'>
  <div>
    <WelcomeBanner/>
  </div>
  <div>
    <HeroSlider/>
  </div>
  <div>
    <Categories/>
  </div>
</div>
  )
}

export default Home