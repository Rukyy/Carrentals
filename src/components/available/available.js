import { useEffect, useState,useRef } from 'react'
import './available.css'
import NavBar from '../navbar/navbar'

const AvailableCars = ({addsub}) => {
    const addtocart=useRef(null)
    const[datta, setdatta]=useState(null)
    const[pending,setpending]=useState(true)
    const[error, seterror]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:8000/items')
        .then((res)=>{
            if (!res.ok){throw Error('Could not fetch Data')}
            return res.json()
        })
        .then((data)=>{
            setdatta(data)
            console.log(datta) 
            setpending(false)
        })
        .catch((err)=>{
            setpending(false)
            seterror(err.message)
        })
    },[])
    const [count, setcount]=useState(1)
    const additem=()=>{
        setcount(count+1)
        addsub(count)
    }
    return ( 
        <div className="AvailableCars">
            <h1 className='available'>Available</h1> 
            <div className="items">
                {datta && datta.map((carinfo)=>(
                    <div className='item'>
                        <div className='picframe'style={{backgroundImage:`url(${carinfo.carpic})`}}><button onClick={()=>{additem()}} className='addtocart'>Add to cart<i className="fa-solid fa-cart-shopping"></i></button> </div>
                        <div>Name:<h4>{carinfo.name} </h4><br />Price: <h4>{carinfo.price}</h4><br />Color:<h4>{carinfo.color}</h4></div>
                    </div>
                )
                )}
            </div>
        </div>
     );
}
 
export default AvailableCars;