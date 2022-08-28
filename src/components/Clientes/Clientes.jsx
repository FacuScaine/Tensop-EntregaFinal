import './Clientes.css';
import ml from '../Imagenes/ml.png';
import mc from '../Imagenes/mc.jpg';
import ypf from '../Imagenes/ypf.jpg';

function Clientes() {
    return (
        <>
            <h1>Clientes</h1>

            <main>
                <div className="imagenes">
                    <img src={mc} alt="McDonald"></img>
                    <img src={ypf} alt="YPF"></img>
                    <img src={ml} alt="MercadoLibre"></img>
                </div>
            </main>
        </>
    )
};

export default Clientes