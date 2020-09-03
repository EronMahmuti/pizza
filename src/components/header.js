import React from 'react'
import pizzalogo from '../assets/pizzalogog.png';
const Header = function header() {
    return (
        <div className="hederi" style={{ background:'rgba(22,22,0,0.4)'}} >
            
                <img className="logo" src={pizzalogo} alt='logo' /> 
            
               
        </div>
        
    )
}

export default Header;
