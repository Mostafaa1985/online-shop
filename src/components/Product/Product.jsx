import React from 'react'
import './Product.style.css'
const Product = ({item,handleAddToCart}) => {
  return (
    <div className='product'>
        <div>
        <div className='cartImg'>
            <img className='img' src={item.image} />
            <p className='addToCart' onClick={()=>handleAddToCart()}>Add To Cart</p>
        </div>
        <h3 style={{paddingTop:'5px'}}>{item.title}</h3>
        <div style={{padding:'10px 0'}}>From {item.price}€</div>
        <p>{item.description}</p>
        </div>
    </div>
  )
}

export default Product