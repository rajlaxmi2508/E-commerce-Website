import React from 'react'
import './Product.css'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {IoRemove,IoAdd} from 'react-icons/io5'

const Product = () => {
  return (
    <div className='Pages-Product-container'>
      <Navbar/>
      <div className='Pages-Product-Wrapper'>
        <div className='Pages-ImageContainer'>
            <img className="Pages-Product-Img" src="https://i.ibb.co/S6qMxwr/jean.jpg"  alt=""/>
        </div>
        <div className='Pages-InfoContainer'>
            <div className='Pages-Product-Title'>
            Denim Jumpsuit
            </div>
            <div className='pages-Product-Desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
            </div>
            <div className='Price'>
                Rs.2000
            </div>
            <div className='Pages-Filter-Container'>
                <select>
                <option className='Pages-ProductFilter-Title' disabled selected>Color</option>
                <option className='Pages-ProductFilter-color'>Black</option>
                <option className='Pages-ProductFilter-color'>Light Blue</option>
                <option className='Pages-ProductFilter-color'>Gray</option>
                </select>
                <select className='Pages-ProductFilter'>
                <option className='Pages-ProductFilter-Title' disabled selected>Size</option>
                <option className='Pages-ProductFilter-Size' >XS</option>
                <option className='Pages-ProductFilter-Size'>S</option>
                <option className='Pages-ProductFilter-Size'>M</option>
                <option className='Pages-ProductFilter-Size'>L</option>
                <option className='Pages-ProductFilter-Size'>XL</option>
                </select>
            </div>
            <div className='Pages-Product-AddContainer'>
                <div className='Pages-Product-AmountContainer'>
                <IoRemove />
                <div className='Pages-Product-Amount'>1</div>
                <IoAdd/>
                </div>
                <btn className='Pages-Product-Button'>ADD TO CART</btn>
            </div>
            </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Product
