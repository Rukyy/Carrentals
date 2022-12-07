import './navbar.css'
// import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../usefetch';
import { useState } from 'react';
const NavBar = ({state}) => {
    const [itemsincart, setitemsincart]=useState(0)
        fetch('http://localhost:800/users')
        .then((res)=>{return res.json()})
        .then((data)=>{setitemsincart(data.length)})

    return ( 
        <div className="NavBar">
            <ul>
                <li><a href="/"><i className="fa-solid fa-car"></i> Autoshop</a></li>
                <li><i className="fa-solid fa-house"></i>Home</li>
                <li>About</li>
                <li>Conatct</li>
                <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"><sup className='cartitems'>{itemsincart}</sup></i>Cart</Link></li>
                {/* <li><a href="/"><i className="fa-solid fa-cart-shopping"><sup className='cartitems'>{state}</sup></i>Cart</a></li> */}
                <li>Sign in/login  </li>
            </ul>
        </div>
     );
}
 
export default NavBar;