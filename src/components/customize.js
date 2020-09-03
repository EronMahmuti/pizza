import React from 'react'
import Cheese from '../assets/BaseCheese.png';
import Basil from '../assets/Basil.png';
import Mushroom from '../assets/Mushroom.png';
import Olive from '../assets/Olive.png';
import Prosciutto from '../assets/pershuto.png';
import Basepizza from '../assets/PizzaBase.png';
import Tomato from '../assets/Tomato.png';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const Customize = function Customize({ingredients, setIngredients}) {
    let history = useHistory();
    const onChange = (event, name) => {   
        // console.log(localStorage);
            let newIngredients = JSON.parse(JSON.stringify(ingredients));
            newIngredients[name] = event;
            //toggle that ingredient
            setIngredients(newIngredients);
            localStorage.setItem("ingredients", JSON.stringify(newIngredients));
            console.log(`event + ${name}`)
    };
    return (
       
        <div style={{display:'flex' }} >
        
            <div className="rumbullak">
                <div className="cipa" style={{maxHeight:500, maxWidth:500,  position:'relative' }}>
                <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients['cheese'] ? 100 : -90,
                            opacity:ingredients['cheese'] ? 1 : 0,
                        }}
                        transition={{duration: 1}}
                        className = "ingredients z1" >
                     <img src={Cheese} alt="cheese" height="100%" width="100%" />
                </motion.div>

                
                <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients['olive'] ? 100 : -90,
                            opacity:ingredients['olive'] ? 1 : 0,
                        }}
                        transition={{duration: 1}}
                        className = "ingredients z2" >
                     <img src={Olive} alt="olive" height="100%" width="100%"  />
                </motion.div>
               
                <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients['prosciutto'] ? 100 : -90,
                            opacity:ingredients['prosciutto'] ? 1 : 0,
                        }}
                        transition={{duration: 1}}
                        className = "ingredients z3" >
                    <img src={Prosciutto} alt="prosciutto" height="100%" width="100%"   />
                </motion.div>

                <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients['mushroom'] ? 90 : -90,
                            opacity:ingredients['mushroom'] ? 1 : 0,
                        }}
                        transition={{duration: 1}}
                        className = "ingredients z4" >
                    <img src={Mushroom} alt="base" height="100%" width="100%" />
                </motion.div>

                <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients['basil'] ? 100 : -90,
                            opacity:ingredients['basil'] ? 1 : 0,
                        }}
                        transition={{duration: 1}}
                        className = "ingredients z3" >
                    <img src={Basil} alt="basil" height="100%" width="100%" />
                </motion.div>
                
                <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients['tomato'] ? 100 : -90,
                            opacity:ingredients['tomato'] ? 1 : 0,
                        }}
                        transition={{duration: 1}}
                        className = "ingredients z2" >
                    <img src={Tomato} alt="base" height="100%" width="100%"  />
                </motion.div>
                <motion.div
                initial={{opacity:0}}
                        animate={{
                            y:  0 ,
                            opacity:ingredients['Bassepizza'] ? 0 : 1,
                        }}
                        transition={{duration: 1.8}}
                >
                <img src={Basepizza} alt="base" height="100%" width="100%"  />
                </motion.div>
                        
                </div>
            </div>
        
            <div style={{ flex:1, padding:10 , textAlign:'center'}}>
            <label className="container-checkbox" >
                    <input type="checkbox" 
                       
                        checked={ingredients["cheese"]}
                        onChange = {(event) =>
                            onChange(event.currentTarget.checked, "cheese") 
                    }/>
                <span className="checkmark"></span>
                <p className="itemat">Cheese</p></label>
            <label className="container-checkbox">
            <p className="itemat">Prosciutto</p>
                <input type="checkbox" 
                    checked={ingredients["prosciutto"]}
                    onChange = {(event) =>
                        onChange(event.currentTarget.checked, "prosciutto") 
                }/>
                
                    <span className="checkmark"></span>
                </label>
                
                <label className="container-checkbox" >
                <p className="itemat"> Basil</p>
                    <input type="checkbox" 
                        checked={ingredients["basil"]}
                        onChange = {(event) =>
                            onChange(event.currentTarget.checked, "basil") 
                    }/>
                <span className="checkmark"></span>
                </label>
                
                <label className="container-checkbox">
                    <input type="checkbox" 
    
                        checked={ingredients["mushroom"]}
                        onChange = {(event) =>
                            onChange(event.currentTarget.checked, "mushroom") 
                    }/>
                <span className="checkmark"></span>
                <p className="itemat">Mushroom</p></label>
                <label className="container-checkbox">
                    <input type="checkbox" 
                       
                        checked={ingredients["tomato"]}
                        onChange = {(event) =>
                            onChange(event.currentTarget.checked, "tomato") 
                    }/>

                <span className="checkmark"></span>
                <p className="itemat">Tomato</p></label>
                <label className="container-checkbox">
                    <input type="checkbox" 
                        checked={ingredients["olive"]}
                        onChange = {(event) =>
                            onChange(event.currentTarget.checked, "olive") 
                    }/>
                <span className="checkmark"></span>
                <p className="itemat">Olive </p> </label>
                <button className="btn" onClick={ () => history.push('/checkout')} >
                <h4>Continue</h4>
            </button>
            </div>
            
        </div>
        
        //https://www.youtube.com/watch?v=8YNYhUapAzY&t=183s
       
    )
}

export default Customize;