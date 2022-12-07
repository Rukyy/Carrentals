import { useState } from "react";
import './checkout.css'
const CheckOut = () => {
    const [cardname, setcardname]=useState('')
    const [cardnumber, setcardnumber]=useState('')
    const [cvv, setcvv]=useState('')
    const [Exp, setExp]=useState('')
    return ( 
        <div className="paymentsection">
            <h2>Enter Your Card Details</h2>
            <img src="https://sea.mastercard.com/content/dam/public/mastercardcom/sea/en/consumer/cards/consumer-platinum-credit-card_1280x720.png" alt="" />
            <div className="cardform">
                <form action="">
                    {/* <div className="details"> */}
                        <label>Name on Card</label>
                        <input 
                        type="text"
                        required
                        placeholder="Enter Name on Card"
                        value={cardname} 
                        onChange={(e)=>{setcardname(e.target.value)}}/>
                        
                    {/* </div> */}
                    {/* <div className="details"> */}
                        <label>Card Number</label>
                        <input 
                        type="text"
                        required
                        placeholder="xxxx xxxx xxxx xxxx" 
                        value={cardnumber}
                        onChange={(e)=>{setcardnumber(e.target.value)}}/>
                    {/* </div> */}
                    {/* <div className="details"> */}
                        <label>cvv</label>
                        <input 
                        type="text"
                        required
                        placeholder="Enter cvv"
                        value={cvv}
                        onChange={(e)=>{setcvv(e.target.value)}} />
                    {/* </div> */}
                    {/* <div className="details"> */}
                        <label>Exp date</label>
                        <input 
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={Exp}
                        onChange={(e)=>{setExp(e.target.value)}} />
                    {/* </div> */}

                </form>
                <button className="paybtn">Pay</button>
            </div>
        </div>
     );
}
 
export default CheckOut;