import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from "../../../context/CartContext.jsx";
import { Link } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart.jsx";
import './Cart.css'

export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        cliente: {
            nombre: 'Facundo',
            email: 'facusca@gmail.com',
            telefono: '11 36013722',
            direccion: 'fragata hercules 1579'
        },
        items: cart.map(product => ({ id: product.id, titulo: product.title, precio: product.price })),
        total: totalPrice()
    }

    const emitirCompra = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return <>
        <h1>Cart</h1>
        <main className="noCart">
            <h2>No hay elementos en el carrito!</h2>
            <button type="button" className="btn btn-primary"><Link className="link" to={'/productos'}>Ir a comprar</Link></button>
        </main>
        </>
    }

    return (
        <>
        <h1>Cart</h1>
            <main>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">SubTotal</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                </table>
                {
                    cart.map(product => <ItemCart key={product.id} product={product}></ItemCart>)
                }
                <div className="total">
                    <h3>Total:${totalPrice()}</h3>
                </div>
                <button onClick={emitirCompra} type="button" className="btn btn-success">Emitir Compra</button>

            </main>
        </>
    )
};

export default Cart