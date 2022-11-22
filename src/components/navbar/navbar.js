import './navbar.css'
// import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = ({state}) => {



    return ( 
        <div className="NavBar">
            <ul>
                <li><a href="/"><i className="fa-solid fa-car"></i> Autoshop</a></li>
                <li><i className="fa-solid fa-house"></i>Home</li>
                <li>About</li>
                <li>Conatct</li>
                {/* <li><Link to="/"><i className="fa-solid fa-cart-shopping"><sup className='cartitems'>{state}</sup></i>Cart</Link></li> */}
                <li><a href="/"><i className="fa-solid fa-cart-shopping"><sup className='cartitems'>{state}</sup></i>Cart</a></li>
            </ul>
        </div>
     );
}
 
export default NavBar;