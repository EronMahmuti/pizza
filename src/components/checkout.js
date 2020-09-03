import React,  { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Checkout = ({ ingredients }) => {
    const history = useHistory();
    const [success, setSuccess] = useState(false);    
    
    return (
        
        <div >
            
                <div style={{textAlign:'center'}}>
                    <h1 className="title">My ingredients</h1>
                    {Object.keys(ingredients).map((ingredient) => {
                        return(
                            ingredients[ingredient] && (
                            <p className="chekii" style={{textAlign:'center'}}> {ingredient[0].toUpperCase()} 
                                    {ingredient.substr(1) }
                                </p>

                            )
                        )
                    })}
                    <button className="btn" 
                     onClick={() => setSuccess(true)}
                        >Confirm</button>
                    <button className="btn" onClick={() => history.push('/')}
                        >go back</button>
                </div>
                    {success && (
                        history.push('/modal')
                    )}
                
            
        </div>
        
    )
}

export default Checkout;