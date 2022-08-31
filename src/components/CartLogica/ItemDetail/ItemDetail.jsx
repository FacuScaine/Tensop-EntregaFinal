import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../../context/CartContext'

function ItemDetail({ data }) {

    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext()

    const onAdd = (cantidad) => {
        setGoToCart(true)
        addProduct(data,cantidad)
    }

    return (
        <>
            <main className='detail'>
                <div className="producto">
                    <img src={data.image} alt={data.title} />
                    <h3>{data.title}</h3>
                    <h5>${data.price}</h5>
                    {
                        goToCart ?  <button type="button" className="btn btn-primary"><Link to={'/cart'} className="link">Terminar Compra</Link></button> : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
        
                <button type="button" className="btn btn-primary"><Link to={'/productos'} className="link">Seguir Comprando</Link></button>
            </main>
        </>
    )
};

export default ItemDetail