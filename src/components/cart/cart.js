import { useEffect } from "react";

const Cart = () => {
    useEffect(()=>{
        fetch( `http://localhost:8000/items/${id}`)
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)})

        fetch(`http://localhost:8001/user1`,{
            method:"Post",
            headers:{'content-Type':'application/json'}
        })
    })
    return (  
        <div className="cartitems">

        </div>
    );
}
 
export default Cart;