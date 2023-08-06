import React from 'react'
import './Newsletter.css'
import {AiOutlineSend} from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className='Newsletter-container'>
      <div className='Newsletter-tittle'>
        Newsletter !
      </div>
        <div className="Newsletter-Description">
            Get timely updates from your favorite products.
        </div>
            <div className='InputContainer'>
                <input  type="email" placeholder='Your email'/>
                    <button className='Newsletter-button'>
                        <AiOutlineSend/>

                    </button>
                
            </div>
       
      
    </div>
  )
}

export default Newsletter
