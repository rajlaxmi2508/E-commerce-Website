import React from 'react'
import './ProductList.css'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <div className='ProductList-container '>
      <Navbar/>
      <div className='ProductList-title'>
        Dresses
        </div>
        <div className='FilterContainer'>
          <div className='Filter'>
            <div className='FilterText'>
              Filter Products:
            </div>
            <select>
              <option disabled selected>Color </option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Green</option>
            </select>

            <select>
              <option disabled selected>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
        </div>
        <div className='Filter'>
          <div className='FilterText'>
            Sort Product:
          </div>
          <select>

          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
          </select>
        </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList
