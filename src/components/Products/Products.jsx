import React from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import './Products.style.css'
import { Store } from '../../store'
const Products = () => {
  const {
    state: { products },
    dispatch,
  } = React.useContext(Store);
  React.useEffect(()=>{
       const getData = async ()=>{
           const {data} = await axios.get('https://fakestoreapi.com/products')
           console.log(data);
           dispatch({type:"get_products",payload:data})
       }
       getData()
  },[])

  const handleAddToCart = (item)=>{
    dispatch({type:"addToCart",payload:item})
     console.log(item);
  }
  return (
    <div className='container'>
        <h2 className='productsText'>products</h2>
        <div className='products'>
            {
                products.map((item,index)=>(
                    <Product key={index} item={item} handleAddToCart={()=>handleAddToCart(item)}/>
                ))
            }
    
        </div>

    </div>
  )
}

export default Products