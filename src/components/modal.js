import React from 'react'
import Pizzaman from '../assets/pnnn.png'
import { useHistory } from 'react-router-dom'
const Modal = () => {
    // const [kthimi, rikthimi] = useState(false);
     const history = useHistory();
    // const another =  (count) => {
    //         count = document.querySelector('#other');
    //         count.addEventListener('click', (event) =>{
    //             history.push('/another')
    //         })
    // }
    // const handleChange = () => { 
    //     {Object.keys(ingredients).map((ingredient) => {
    //         return(
    //             ingredients[ingredient] = false
    //         )
    //     })}
    // }

    const myfunc = () => {
        history.push('/')
        
        // if(ingredients === true){
        //     return setIngredients = false
        // }
    }
    

    return (
        
        <div className="order" style={{textAlign:"center"}}>
                            
                                <img className="pizzmani" src={Pizzaman} alt="pizzaman" />
                            
                            <div className="parat" style={{fontFamily:"monospace"}}>
                            <p>We have recived your order</p>
                            <p>order #{Math.round(Math.random() * 101)}</p>
                            <p>Will be ready in 15-20 mins.</p>
                            </div>
                        <button className="btn" id="other" onClick={() => myfunc() } 
                        >order another</button>
                        </div>
    )
}
export default Modal