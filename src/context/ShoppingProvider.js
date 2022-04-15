import React, { useState } from 'react'
import { ShoppingContext } from './ShoppingContext'

const initialState={
    products:[]
}

export default function ShoppingProvider({children}) {
    const [shopping, setShopping]=useState(initialState);

  return (
    <ShoppingContext.Provider value={{shopping,setShopping}}>
        {children}
    </ShoppingContext.Provider>
  )
}
