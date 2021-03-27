import React,{useState} from 'react'
import './component-styles.css'
import {useCart} from './Context/CartContext'
import {Link} from 'react-router-dom'
import routes from "./Routes"

function Checkout() {

    const {getProductsFromCart} = useCart()
    const [items]=useState(getProductsFromCart())
    console.log(items)
    return (
        <>
            <div className='card checkout-card'>
                <div className='card-body'>
                    <h2 className='card-title'>Confirm Your Order</h2>
                    <div className='card-text'>
                        {/* Create a view for product list */}
                    </div>
                    
                </div>
            </div>
            <Link to={routes.success}>
                <button className='btn btn-primary pay-btn'>
                            Confirm and Pay
                </button>
            </Link>
            
        </>
        
    )
}

export default Checkout
