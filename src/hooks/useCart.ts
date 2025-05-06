import { useState, useEffect } from 'react'
import type { Guitar, CartItem } from '../types'

export const useCart = () => {
    
  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [cart, setCart] = useState(initialCart)

  const MIN_ITEMS = 1

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function decreaseQuantity(id : Guitar['id']) {
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }

  return {
    cart,
    decreaseQuantity,
    clearCart
  }
}



