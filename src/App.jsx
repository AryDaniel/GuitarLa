import Header from "./components/Header"
import Guitarra from "./components/Guitarra"

function App() {

  return (
    <>
    <Header />

      <main class="container-xl mt-5">
          <h2 class="text-center">Nuestra Colección</h2>
          
          <div class="row mt-5">
            <Guitarra />
            <Guitarra />
            <Guitarra />
            <Guitarra />
            <Guitarra />
            <Guitarra />
            <Guitarra />
          </div>
      </main>


      <footer class="bg-dark mt-5 py-5">
          <div class="container-xl">
              <p class="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App
