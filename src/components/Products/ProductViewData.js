import React from 'react'

export default function ProductViewData({product}) {
    return (
        <div>
            <img className="card-img-top" src={product.imageURL} alt={product.name}
                style= {{
                    width:'100%',
                    position:'relative'
                    // borderRadius:'50%'
                }}></img>
            
            <div>{product.name}  Rs. {product.price}</div> 
        </div>
    )
}
