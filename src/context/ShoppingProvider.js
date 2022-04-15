import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import { ShoppingContext } from './ShoppingContext'

const URL='https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js';

const initialState={
    products:[]
}

export default function ShoppingProvider({children}) {
    const [shopping, setShopping]=useState(initialState);
    
    const {data:response,loading,error}=useFetch(URL);

  return (
    <ShoppingContext.Provider value={{shopping,setShopping}}>
        {children}
    </ShoppingContext.Provider>
  )
}
