import './Home.css';
import fabrica from '../Imagenes/Fabrica.jpg';
import quimica from '../Imagenes/quimica Trabajando.jpg';
import products from '../Imagenes/sanitary-products-in-top-view.jpg';
import detergente from '../Imagenes/1.jpg';
import kitLimpieza from '../Imagenes/2.jpg';

function Home() {
    return (
        <>
            <h1>Home</h1>

            <main>
                <div class="info">
                    <h2>Te Contamos Un Poco</h2>
                    <p>Estamos trabajando para traer los mejores productos calidad/precio que se va a poder encontrar en el mercado
                    </p>
                </div>

                <div class="info-contenido">
                    <div class="productoDes">
                        <img src={detergente} alt="detergente"></img>
                        <p>Probá el nuevo detergente Multiuso Limón con súper poder desengrasante. Que rinde x5 y que desengrasa platos
                            y más (superficies de comida, microondas, hornallas, nevera, llantas, etc). El aroma fresco del limón sumado
                            al poder de la fórmula de <b>TENSOP</b> hacen de esta variedad un imbatible en la cocina.</p>
                    </div>

                    <div class="productoDes">
                        <img src={kitLimpieza} alt="kitLimpieza"></img>
                        <p>Contamos con el mejor y mas completo kit de limpieza de auto del mercado. Viene con silicona para dejar tus
                            llantas relucientes. Un shampoo que dejata tu pintura como nueva, microfibras para un secado correcto y una
                            exelente manopla de felpa para no marcar tu auto a la hora de fregarlo! </p>
                    </div>

                </div>

                <div id="carouselExampleCaptions" class="carousel slide cont carousel-fade" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={quimica} class="d-block w-100" alt="Tuvos de ensayo"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Calidad En Productos!</h5>
                                <p>Contamos con los mejores quimicos del rubro.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={fabrica} class="d-block w-100" alt="Fabrica"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Nuestras instalaciones!</h5>
                                <p>Invertimos gran parte de nuestro capital para tener las mejores instalaciones.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={products} class="d-block w-100" alt="Productos"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Productos!</h5>
                                <p>Disponemos de un amplio catalogo de productos para satisfacer a todos nuestros Clientes.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </main></>
    )

};

export default Home