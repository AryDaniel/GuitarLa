export default function Header() {

    return (
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
    )
}