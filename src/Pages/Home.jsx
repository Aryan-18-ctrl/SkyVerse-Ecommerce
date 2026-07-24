import React from 'react'
import HeroSlider from '../components/HeroSlider'
import WelcomeBanner from '../components/WelcomeBanner'
import Categories from '../components/Categories'
import TopRated from '../components/TopRated'
const Home = () => {

  return (
<div className='px-4 py-6 sm:px-6 sm:py-10 lg:px-10 overflow-x-hidden'>
  <div>
    <WelcomeBanner/>
  </div>
  <div className=' hidden md:block'>
    <HeroSlider/>
  </div>
  <div>
    <Categories/>
  </div>
  <div>
    <TopRated/>
    </div>
</div>
  )
}

export default Home