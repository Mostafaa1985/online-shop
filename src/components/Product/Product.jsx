import React from 'react'
import './Product.style.css'
const Product = ({ item, handleBuy, handleCancle }) => {
  return (
    <div className='product'>
      <div>
        <div className='cartImg'>
          <img className='img' src={item.image} />
          <div className='handling'>
            <p className='buy' onClick={() => handleBuy()}>+</p>
            <p className='cancle' onClick={() => handleCancle()}>-</p>
          </div>

        </div>
        <h3 style={{ paddingTop: '5px' }}>{item.title}</h3>
        <div style={{ padding: '10px 0' }}>From {item.price}€</div>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default Product