import React from 'react'
import Navbar from '../components/Navbar'
import HomeCarousel from '../components/HomeCarousel';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const Home=()=>{
    return(
       <div>
       
        <Navbar/>
        <HomeCarousel/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
       </div> 
    )
}
export default Home;