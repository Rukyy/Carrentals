import { useEffect, useState } from "react";

const useFetch=()=>{
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=81be7448272b76b824ea98b596cfc90b&units=metric`)
    .then(res=>{
        if(!res.ok){throw Error('could not fetch Data')}
        return res.json
    })
    .then(data=>{
        console.log(data)
    })
}

export default useFetch;