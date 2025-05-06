import Header from "./components/Header"
import Guitarra from "./components/Guitarra"
import { useCart } from './hooks/useCart'
import { useReducer } from "react"
import { cartReducer, initialState } from "./reducers/cart-reducer"

// npm run build

function App() {
    const {
      clearCart
    } = useCart()

    const [state, dispatch] = useReducer(cartReducer, initialState)
    
  return (
    <>
    <Header 
        cart={state.cart}
        dispatch={dispatch}        
        clearCart={clearCart}
    />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
            {state.data.map((guitarra) => (
                <Guitarra 
                    key={guitarra.id}
                    guitarra ={guitarra}
                    dispatch={dispatch}
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
