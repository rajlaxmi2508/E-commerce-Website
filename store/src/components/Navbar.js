import React from 'react'
import './Navbar.css'
import {FaSearch} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar=()=>
{
    return(
        <div className='Navbar-container'>
            <div className="wrapper">
                <div className="left">
                    EN
                    <div className="input-wrapper">
                    <FaSearch id="search-icon"/>
                   <input placeholder="Type to search..."/>
                   
                   </div>
                </div>
                <div className="center">
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'normal' }}> 
                    <h1>UpTrend</h1>
                </Link>
                </div>
                <div className="right">
                <Link to={`/register/`}> 
                    <button>REGISTER</button>
                </Link>
                <Link to={`/login/`}> 
                    <button>SIGN IN</button>
                </Link>
                <Link to={`/cart/`}> 
                    <FaShoppingCart id="Right"/>
                </Link>
                </div>
            </div>
            </div>
    )
}
export default Navbar;