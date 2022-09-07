// import { Link } from 'react-router-dom';
// import { useState } from "react";



export const CartState = ({endCart}) =>{

    return (
        <main className="noCart">
            {(endCart) ? <h2>Orden Creada Corrctamente</h2> : <h2>No hay elementos en el carrito!</h2> }
        </main>
    )        
        };
        
        export default CartState
        //             {/* <button type="button" className="btn btn-primary"><Link className="link" to={'/productos'}>Ir a comprar</Link></button> */}