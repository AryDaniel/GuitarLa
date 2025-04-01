import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Guitarra from "./components/Guitarra"
import { db } from './data/db.js'

// npm run build

function App() {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')

        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    })

    function addToCart(item) {
        const itemExists = cart.findIndex((guitar) => guitar.id === item.id)
        
        if (itemExists > -1 ) {
            if (cart[itemExists].quantity >= MAX_ITEMS) return
            
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity ++
            setCart(updatedCart)
        } else {
            console.log("Adding to cart")
            item.quantity = 1
            setCart([...cart, item])
        }
    }
    
    function removeFromCart(id) {
        setCart( prevCart => prevCart.filter((item) => item.id !== id))
    }
    
    function decreaseQuantity(id) {
        const updateCart = cart.map((item) =>{
            if(item.id === id && item.quantity > 1) {
                return {
                    ...item, quantity: item.quantity-1
                }
            }
            return item
        })
        setCart(updateCart)
    }
        
    function increaseQuantity(id) {
        const updateCart = cart.map((item) =>{
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item, quantity: item.quantity + 1 
                }
            }
            return item
        })
        setCart(updateCart)
    }

    function clearCart() {
        setCart([])
    }
    
  return (
    <>
    <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
    />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
            {data.map((guitarra) => (
                <Guitarra 
                    key={guitarra.id}
                    guitarra ={guitarra}
                    addToCart={addToCart}
                />
            ))}
            
          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App
