
import { useState } from 'react';
import AvailableCars from '../available/available';
import Cart from '../cart/cart';
import Hotdeals from '../hotdeals/hotdeals';
import NavBar from '../navbar/navbar';
import './home.css'
const Home = ({setstate}) => {

    const [addsub, setaddsub]=useState('')
    setstate(addsub)
    // console.log(addsub)
    return ( 
        <div className="home">
            {/* <NavBar/> */}
            <div className="welcome">
                <h4>Welcome to Autoshop <br /> Rent the best of cars for your use. <br /> Luxury, power, luxury and power. </h4>
            </div>
            <AvailableCars addsub={setaddsub}/>
        </div>


     );
}
 
export default Home; 