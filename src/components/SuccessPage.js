import React, {useEffect} from 'react'
import './component-styles.css'
import {useCart} from './Context/CartContext'
function SuccessPage() {
    // Implement the other functionality like clearing cart and back straght to home
    const {emptyCartProducts} = useCart()
    useEffect(()=>{
        // Empty cart after it is successful
        emptyCartProducts()
    },[])
    return (
        <div className='card success-card'>
            <div className='card-body'>
                <h5 className='card-title'>Payment Successful</h5>
                <div className='card-text'>
                    <p>Your order will be delivered soon</p>
                </div>
                
            </div>
        </div>
    )
}

export default SuccessPage
