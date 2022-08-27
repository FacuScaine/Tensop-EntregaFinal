import { useState } from 'react';
import './ItemCount.css';

function ItemCount({stock,onAdd}) {
    const [cantidad, setCantidad] = useState(1)

    const sumar = () => {
        setCantidad(cantidad +1)
    }
    const restar = () => {
        setCantidad(cantidad -1)
    }

    return (
        <>
            <div className="count">
                <div>
                    <button onClick={restar} disabled={cantidad <= 1} type="button" className="btn btn-sm">-</button>
                    <span>{cantidad}</span>
                    <button onClick={sumar} disabled={cantidad >= stock} type="button" className="btn btn-sm">+</button>
                </div>
                <button disabled={stock <= 0} onClick={()=> onAdd(cantidad)} type="button" className="btn">Agregar al carrito</button>
            </div>

        </>
    )
};

export default ItemCount