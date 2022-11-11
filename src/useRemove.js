import React from "react";
import { Store } from "./store";


export default function useRemove() {
    const {
        state: { cart, counter },
        dispatch
    } = React.useContext(Store);

    function handleCancle(id) {

        counter.map(product => {
            if (product.id === id) {
                if (product.count > 1) {
                    dispatch({ type: 'count--' }); product.count--
                    cart.length--
                }
                else {
                    dispatch({ type: 'removeCart', payload: { id: id } })
                }
            }

        })

    }


    return handleCancle
};


