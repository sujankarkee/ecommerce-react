import React from 'react'
import Preheader from '../components/Preheader'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Featured from '../components/Featured';

import PopularCategories from '../components/PopularCategories';
import PopularProducts from '../components/PopularProducts';

const HomePage = () => {
  return (
    <div>

        <Preheader />
        <Logo />
        <Navbar />
        <Banner />
        <Featured/>
        <PopularCategories/>
        <PopularProducts/>
        


    </div>
  )
}

export default HomePage