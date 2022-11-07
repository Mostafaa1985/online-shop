import { useContext, createContext, useReducer } from "react";

export const Store = createContext();

const InitailState = {
   products:[]  ,
   cart:[]

};

function reducer(state, action) {
  switch (action.type) {
    case "get_products":{
        return {...state,products :[...action.payload]} 
    }
    case 'addToCart':{
        return {...state,cart:[...state.cart,action.payload]}
    }
    case 'removeCart':{
        console.log('id',action.payload);
        return {...state,cart:state.cart.filter(item=> item.id !== action.payload.id)}
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

