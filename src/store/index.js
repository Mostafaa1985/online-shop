import { useContext, createContext, useReducer } from "react";

export const Store = createContext();




const InitailState = {
   products:[]  ,
   cart:[],
  counter: [],
  filterdProducts:[],
  doFilter: 0,   
};

function reducer(state, action) {
  switch (action.type) {
    case "get_products":{
        return {...state, products :[...action.payload]} 
    }
    case 'filteredProducts': {
      return { ...state, filterdProducts:  state.products.filter(product => product.category === action.payload), doFilter: 1 }
    }
    case "showAll&same" : {
      return { ...state, filterdProducts: state.products.filter(product => product.category === action.payload), doFilter:0}
    }

    case "noFilterFor Dofilter: 1": {
      return { ...state, filterdProducts: state.products.filter(product => product.category === action.payload), doFilter:0}
    }

    case "noFilter": {
      return {...state, doFilter: 0}
    }
    case 'addToCart':{
        return {...state, cart:[...state.cart,action.payload]}
    }
    case 'addToCounter': {
      return { ...state }
    }
    case 'count++': {
      return { ...state }
    }
    case 'count--': {
      return {...state}
    }
    case 'removeCart':{
        console.log('id',action.payload);
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id), counter: state.counter.filter(item => item.id !== action.payload.id) }
    }
    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, InitailState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>

}

