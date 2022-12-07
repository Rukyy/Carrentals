import { useEffect, useState,useRef } from 'react'
import './available.css'
import NavBar from '../navbar/navbar'
import useFetch from '../../usefetch'

const AvailableCars = ({addsub}) => {
    const addtocart=useRef(null)
    const[datta, setdatta]=useState(null)
    const[pending,setpending]=useState(true)
    const[error, seterror]=useState(null)
    const [check, setcheck]=useState('')

    useEffect(()=>{
        fetch('http://localhost:8000/items')
        .then((res)=>{
            if (!res.ok){throw Error('Could not fetch Data')}
            return res.json()
        })
        .then((data)=>{
            setdatta(data)
            // console.log(datta) 
            setpending(false)
        })
        .catch((err)=>{
            setpending(false)
            seterror(err.message)
        })
    },[]) 
    const [count, setcount]=useState(1)
    const additem=(Id)=>{
        setcount(count+1)
        addsub(count)
        
        fetch(`http://localhost:8000/items/${Id}`)
        .then((res)=>{ return res.json()})
        .then((result)=>{
            let carname=result.name
            let carpic=result.carpic
            let carprice=result.price
            let color=result.color
            let year=result.YEAR
            const item={carname,carpic,year,carprice,color}
            fetch(`http://localhost:800/users`,{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(item)
                })
        })

        
    }
    // const addtocartdb=(item)=>{    
    //     setTimeout(()=>{
    //         console.log(item)

    //         },2000)
    //     }

        


    return ( 
        <div className="AvailableCars">
            <h1 className='available'>Available</h1> 
            <div className="items">
                {datta && datta.map((carinfo)=>(
                    <div className='item'>
                        <div className='picframe'style={{backgroundImage:`url(${carinfo.carpic})`}}><button onClick={()=>{additem(carinfo.id)}} className='addtocart'>Add to cart<i className="fa-solid fa-cart-shopping"></i></button> </div>
                        <div>Name:<h4>{carinfo.name} </h4><br />Year:{carinfo.YEAR}<br />Color:<h4>{carinfo.color}</h4><br />Price:$<h4>{carinfo.price}</h4></div>
                        {/* {setcheck(carinfo.id)} */}
                    </div>
                )
                )}
            </div>
        </div>
     );
}
 
export default AvailableCars;