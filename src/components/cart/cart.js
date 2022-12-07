import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import useFetch from "../../usefetch";
import './cart.css'

const Cart = ({prop}) => {
    const history=useHistory()
    const [totamount, settotamount]=useState('')
    let price=0
    const {data,ispending,error}=useFetch(`http://localhost:800/users`)
    // console.log(data)
    const del=(ID)=>{
        fetch(`http://localhost:800/users/${ID}`,{
            method:"DELETE"
        }).then(window.location.reload())
    }
    // useEffect(()=>{ 
        setTimeout(() => {
            for (let i=0;i<data.length;i++){
                price=price+data[`${i}`].carprice
                // console.log(price)
                settotamount(price)

            }
        }, 100);
    // },[data])

  
    return (  
        <div className="cartitems">
            {error && error}
            {data && data.map((item)=>(
                <div className="list">
                    <div className="listitem"><img src={item.carpic} alt="" />
                        <div className="des">
                            <span><h1>{item.color} {item.year} {item.carname} </h1></span>
                            <div><h1>${item.carprice}</h1></div>
                        </div>
                    <button className="dlbtn" onClick={()=>{del(item.id)}}>Remove</button>
                    </div>
                </div>
            ))}
            {!totamount && <div className="notaddedmessage"> Oops!! You've not added anything to your cart <br /> </div>}
            {totamount  && <div className="checkout">Total:${totamount} <Link to='/checkout'><button className="checkbtn"> checkout</button></Link> </div>}
        </div>
    );
}
 
export default Cart;