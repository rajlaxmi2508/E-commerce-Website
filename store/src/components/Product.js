import React from 'react'
import './Product.css'
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai'
const Product = ({item}) => {
  return (
    <div className='Product-container'>
        <div className='circle'/>
            <img className='Product-img' src={item.img} alt=""/>
            <div className="Product-info">
                <div className='Icon'>
                  <AiOutlineShoppingCart/>
                </div>
                <div className='Icon'>
                    <AiOutlineSearch/>

                </div>
                <div className='Icon'>
                    <AiOutlineHeart/>

                </div>
            </div>
        </div>
      

  )
}

export default Product
