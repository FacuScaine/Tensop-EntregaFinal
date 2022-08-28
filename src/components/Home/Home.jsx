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


                <div className="info">
                    <h2>Te Contamos Un Poco</h2>
                    <p>Estamos trabajando para traer los mejores productos calidad/precio que se va a poder encontrar en el mercado
                    </p>
                </div>

                <div className="info-contenido">
                    <div className="productoDes">
                        <img src={detergente} alt="detergente"></img>
                        <p>Probá el nuevo detergente Multiuso Limón con súper poder desengrasante. Que rinde x5 y que desengrasa platos
                            y más (superficies de comida, microondas, hornallas, nevera, llantas, etc). El aroma fresco del limón sumado
                            al poder de la fórmula de <b>TENSOP</b> hacen de esta variedad un imbatible en la cocina.</p>
                    </div>

                    <div className="productoDes">
                        <img src={kitLimpieza} alt="kitLimpieza"></img>
                        <p>Contamos con el mejor y mas completo kit de limpieza de auto del mercado. Viene con silicona para dejar tus
                            llantas relucientes. Un shampoo que dejata tu pintura como nueva, microfibras para un secado correcto y una
                            exelente manopla de felpa para no marcar tu auto a la hora de fregarlo! </p>
                    </div>

                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={quimica} className="d-block w-100" alt="quimica" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={fabrica} className="d-block w-100" alt="fabrica" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={products} className="d-block w-100" alt="products" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </main></>
    )

};

export default Home