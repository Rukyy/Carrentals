import { useState,useEffect } from "react"

const useFetch=(url) =>{
    const [data, setdata]=useState(null)
    const [ispending, setispending]=useState(true)
    let [error, seterror]=useState(null)


    useEffect(()=>{

        setTimeout(()=>{
            fetch(url)
                .then(res=>{
                    if(!res.ok){throw Error('could not fetch Data')}
                    return res.json()})
                .then(data=>{       
                    setdata(data)
                    setispending(false)})
                .catch(err=>{
                    setispending(false); 
                    seterror(err.message)})
        },1000)
    },[url]) 

    return {data,ispending,error}
}

export default useFetch;