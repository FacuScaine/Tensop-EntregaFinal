import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from "../../../context/CartContext.jsx";
import { useState } from "react";
// import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart/ItemCart.jsx";
import CartState from "../CartStates/CartStates.jsx";
import './Cart.css'
import { useEffect } from "react";

export const Cart = () => {
    const [endCart, setEndCart] = useState(false)
    const [cartOn, setCartOn] = useState(false)
    const { cart, totalPrice } = useCartContext();

    useEffect(() =>{
            if (cart.length === 0){
                setCartOn(true)
            }
    },[cart.length])

    const order = (nombre, email, telefono, direccion) => {
        let orden = {
            cliente: {
                nombre: nombre,
                email: email,
                telefono: telefono,
                direccion: direccion
            },
            items: cart.map(product => ({ id: product.id, titulo: product.title, cantidad: product.cantidad, precio: product.price })),
            total: totalPrice()
        }
        emitirCompra(orden)
    }

    const emitirCompra = (Orden) => {
        setEndCart(true)
        setCartOn(true)
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, Orden)
            .then(({ id }) => console.log(id))
    }

    return (
        <>
            <h1>Cart</h1>
            <main>
                {
                    (cartOn) ? 
                    <CartState endCart={endCart}></CartState> 
                    : <div>
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
                
                    <form onSubmit={
                    ev => {
                        ev.preventDefault();
                        const nombre = ev.target.nombre.value
                        const email = ev.target.email.value
                        const telefono = ev.target.telefono.value
                        const direccion = ev.target.direccion.value
                        order(nombre, email, telefono, direccion)
                    }
                    }>
                    <input type="text" id="nombre" required />
                    <input type="email" id="email" required />
                    <input type="number" id="telefono" required />
                    <input type="text" id="direccion" required />
                    <button className="btn btn-success" type="submit">Emitir Compra</button>
                
                    </form> 
                
                </div>
                }
            </main>
        </>
    )
};

export default Cart

