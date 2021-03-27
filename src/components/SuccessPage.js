import React from 'react'
import './component-styles.css'

function SuccessPage() {
    // Implement the other functionality like clearing cart and back straght to home
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
