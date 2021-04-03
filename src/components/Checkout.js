import React,{useState, useEffect} from 'react'
import './component-styles.css'
import {useCart} from './Context/CartContext'
import {Link} from 'react-router-dom'
import routes from "./Routes"

function Checkout() {

    const {getProductsFromCart} = useCart()
    const [items]=useState(getProductsFromCart())
    const [total, setTotal]=useState(0)
    console.log(items)
    function calculateTotal() {
        let total=0
        items.forEach((itm)=> {
            let price= itm.price;
            let qty = itm.count;
            price = qty * price;
            total+=price;
        })
        console.log(`Total is ${total}`)
        setTotal(total)
    }
    useEffect(()=> {
        calculateTotal()
    },[])
    
    return (
        <>
            <div className='card checkout-card'>
                <div className='card-body p-0'>
                    <h2 className='card-title pt-3'>Confirm Your Order</h2>
                    {/* <hr></hr> */}
                    <div className='card-text'>
                        {/* Create a view for product list */}
                        <div className='product-list'>
                            <table>
                           
                                {items.map((item, idx)=>
                                    <tbody key={item.id}>
                                        <tr >
                                            {/* <div className='item' id={idx}> */}
                                                <td><img className='prd-img' src={item.imageURL}></img></td>
                                                <td>{item.name}</td>
                                                {/* <td>{item.count} </td> */}
                                                <td>{item.count} x ₹{item.price}</td>
                                            {/* </div> */}

                                        </tr>
                                        {/* <hr></hr> */}
                                    </tbody> 
                                        
                                        
                                        
                                    )}
                                </table>
                            

                        </div>
                    </div>
                    
                </div>
                <div className='card-footer'>
                    <span class='total'>
                        Total  <span>₹{total}</span>

                    </span>
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
