function App() {

  return (
    <>    
    <header class="py-5 header">
      <div class="container-xl">
          <div class="row justify-content-center justify-content-md-between">
              <div class="col-8 col-md-3">
                  <a href="index.html">
                      <img class="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                  </a>
              </div>
              <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                  <div 
                      class="carrito"
                  >
                      <img class="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                      <div id="carrito" class="bg-white p-3">
                          <p class="text-center">El carrito esta vacio</p>
                          <table class="w-100 table">
                              <thead>
                                  <tr>
                                      <th>Imagen</th>
                                      <th>Nombre</th>
                                      <th>Precio</th>
                                      <th>Cantidad</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>
                                          <img class="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                                      </td>
                                      <td>SRV</td>
                                      <td class="fw-bold">
                                              $299
                                      </td>
                                      <td class="flex align-items-start gap-4">
                                          <button
                                              type="button"
                                              class="btn btn-dark"
                                          >
                                              -
                                          </button>
                                              1
                                          <button
                                              type="button"
                                              class="btn btn-dark"
                                          >
                                              +
                                          </button>
                                      </td>
                                      <td>
                                          <button
                                              class="btn btn-danger"
                                              type="button"
                                          >
                                              X
                                          </button>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>

                          <p class="text-end">Total pagar: <span class="fw-bold">$899</span></p>
                          <button class="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                      </div>
                  </div>
              </nav>
          </div>
      </div>
  </header>

      <main class="container-xl mt-5">
          <h2 class="text-center">Nuestra Colección</h2>

          <div class="row mt-5">
              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_01.jpg" alt="imagen guitarra" />
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Lukather</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100"
                      >Agregar al Carrito</button>
                  </div>
              </div>

              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">SRV</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>

              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_03.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Borland</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>

              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_04.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Vai</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>

              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_05.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Thompson</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>

              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_06.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">White</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>

              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_07.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Cobain</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_08.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Dale</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_09.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Krieger</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_10.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Campbell</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_11.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Reed</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                  <div class="col-4">
                      <img class="img-fluid" src="./public/img/guitarra_12.jpg" alt="imagen guitarra"/>
                  </div>
                  <div class="col-8">
                      <h3 class="text-black fs-4 fw-bold text-uppercase">Hazel</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                      <p class="fw-black text-primary fs-3">$299</p>
                      <button 
                          type="button"
                          class="btn btn-dark w-100 "
                      >Agregar al Carrito</button>
                  </div>
              </div>
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
