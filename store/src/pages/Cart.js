import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoAdd, IoRemove } from 'react-icons/io5'
import './Cart.css'

const Cart = () => {
  return (
    <div className='Cart-container'>
        <Navbar/>
             <div className='Cart-Wrapper'>
            <div className='Cart-Title'> YOUR BAG</div>
            <div className='Cart-top'>
                <button className='Cart-topbutton'>CONTINUE SHOPPING</button>
                <div className='Cart-toptexts'>
                    <span className='Cart-toptext'>Shopping Bag(2) </span>
                    <span className='Cart-toptext'> Your Whishlist(0)</span>
                </div>
                {/* <button type='filled'className='Cart-topbutton'>CHECKOUT NOW</button> */}
            </div>
            <div className='Cart-Bottom'>
            <div className='Cart-Info'>
            <div className='Cart-Product'>
              <div className='Cart-ProductDetail'>
                <img className='Cart-Image' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                <div className='Cart-Details'>
                  <div className='Cart-ProductName'>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </div>
                  <div className='Cart-ProductId'>
                    <b>ID:</b> 93813718293
                  </div>
                  <div className='Cart-ProductColor' color="black" />
                  <div className='Cart-ProductSize'>
                    <b>Size:</b> 37.5
                  </div>
                </div>
              </div>
              <div className='Cart-PriceDetail'>
                <div className='Cart-ProductAmountContainer'>
                  <IoAdd />
                  <div className='Cart-ProductAmount'>2</div>
                  <IoRemove />
                </div>
                <div className='Cart-ProductPrice'>Rs. 880</div>
              </div>
            </div>
            <hr />
            <div className='Cart-Product'>
              <div className='Cart-ProductDetail'>
                <img className='Cart-Image' src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt=""/>
                <div className='Cart-Details'>
                  <div className='Cart-ProductName'>
                    <b>Product:</b> HAKURA T-SHIRT
                  </div>
                  <div className='Cart-ProductId'>
                    <b>ID:</b> 93813718293
                  </div>
                  <div className='Cart-ProductColor' color="gray" />
                  <div className='Cart-ProductSize'>
                    <b>Size:</b> M
                  </div>
                </div>
              </div>
              <div className='Cart-PriceDetail'>
                <div className='Cart-ProductAmountContainer'>
                  <IoAdd />
                  <div className='Cart-ProductAmount'>1</div>
                  <IoRemove />
                </div>
                <div className='Cart-ProductPrice'>Rs. 1499</div>
              </div>
            </div>
          </div>
          <div className='Cart-Summary'>
            <div className='Cart-SummaryTitle'>ORDER SUMMARY</div>
            <div className='Cart-SummaryItem'>
              <div className='Cart-SummaryItemText'>Subtotal</div>
              <div className='Cart-SummaryItemPrice'>Rs. 2379</div>
            </div>
            <div className='Cart-SummaryItem'>
              <div className='Cart-SummaryItemText'>Estimated Shipping</div>
              <div className='Cart-SummaryItemPrice'>Rs. 50</div>
            </div>
            <div className='Cart-SummaryItem'>
              <div className='Cart-SummaryItemText'>Shipping Discount</div>
              <div className='Cart-SummaryItemPrice' >Rs.-15</div>
            </div>
            <div className='Cart-SummaryItem' type="total">
              <div className='Cart-SummaryItemText'>Total</div>
              <div className='Cart-SummaryItemPrice'>Rs. 2414 </div>
            </div>
            <button className='Cart-Checkout'>CHECKOUT NOW</button>
          </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Cart
