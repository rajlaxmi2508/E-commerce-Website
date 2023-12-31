import React from 'react'
import './Products.css'
import {popularProducts} from "../data"
import Product from './Product'
const Products = () => {
  return (
    <div className='Products-container'>
      {popularProducts.map((item)=>(
         <Product item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Products;
