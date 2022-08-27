import ItemCount from "../ItemCount/ItemCount.jsx";
import Item from "../../Item/Item.jsx";
import { useEffect, useState } from "react";
import {getFirestore , collection , getDocs} from 'firebase/firestore';

function ItemListContainer () {

    const onAdd = (cantidad) =>{
        console.log("Compraste " + cantidad)
    }

    const [data,setData] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'productos');

            getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));

    },[])

    return(
        <>
            <ItemCount stock={5} onAdd={onAdd}></ItemCount>
            <main>
                <Item data={data}></Item>   
            </main>
        </>
    )
};

export default ItemListContainer