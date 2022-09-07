import React from 'react';
import { useCartContext } from '../../../context/CartContext';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <>
            <table className='table'>
            <tbody>
                <tr>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>{product.cantidad}</td>
                    <td>${product.cantidad * product.price}</td>
                    <td><button onClick={() => removeProduct(product.id)} type="button" className="btn btn-danger">Eliminar</button></td>
                </tr>
            </tbody>
        </table>

        </>
)
}

export default ItemCart