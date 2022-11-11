import React from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import './Products.style.css'
import { Store } from '../../store'
import useRemove from '../../useRemove'


const Products = () => {
  const handleCancle = useRemove()
  const {
    state: { products, cart, counter, filterdProducts, doFilter },
    dispatch,
  } = React.useContext(Store);
  React.useEffect(()=>{
       const getData = async ()=>{
           const {data} = await axios.get('https://fakestoreapi.com/products')
           
           dispatch({type:"get_products",payload:data})
       }
       getData()
  },[])

  //  function ShowList() (doFilter ? () => filterdProducts : products)

  console.log( filterdProducts)
  const handleBuy = (item)=>{
    dispatch({ type: "addToCart", payload: item })
    console.log(cart)
    if (counter.includes(item)) {console.log('if'); dispatch({ type: 'count++', product: item }); let newCounter= counter.find(product => product.id === item.id) ; newCounter.count++}
    
    else { console.log('else'); dispatch({ type: 'addToCounter', product: item }); item.count = 1; counter.push(item); }
    ;
  }
  return (
    <div className='container'>
        <h2 className='productsText'>products</h2>
        <div className='products'>
         
        {
        doFilter ? filterdProducts.map((item, index) => (
          <Product key={index} item={item} handleBuy={() => handleBuy(item)} handleCancle={() => handleCancle(item.id)} />
        ))
        :null
        }

        { 
        !doFilter && products.map((item, index) => (
          <Product key={index} item={item} handleBuy={() => handleBuy(item)} handleCancle={() => handleCancle(item.id)} />
        ))
        }
         
        </div>

    </div>
  )
}

export default Products