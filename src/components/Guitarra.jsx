export default function Guitarra() {
    return  (
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
    )
}