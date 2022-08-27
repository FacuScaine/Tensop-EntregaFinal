import './Empresa.css';
import quimica from '../Imagenes/Química107.jpg'

function Empresa() {
    return (
        <>
            <h1>Empresa</h1><main>
                <div className="nosotros">
                    <img src={quimica} alt="nuestraQuimica"></img>

                    <p>Somos una empresa dedicada a la comercializacion de productos de limpieza, venta mayorista de materias primas y
                        afines al rubro, nuestra política es ofrecer productos de excelente calidad a precios muy bajos, brindando a
                        nuestros clientes el mayor beneficio del mercado.</p>
                </div>
            </main>
        </>
    )
};

export default Empresa