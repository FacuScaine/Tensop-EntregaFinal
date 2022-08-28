import Item from "../Item/Item.jsx";
import { useEffect, useState } from "react";
import {getFirestore , collection , getDocs, query, where} from 'firebase/firestore';
import { useParams } from "react-router-dom";

function ItemListContainer () {

    const [data,setData] = useState([]);
    const {categoriaID} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'productos');

        if(categoriaID){
            const queryFilter = query(queryCollection, where('categoria','==', categoriaID));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));
        }else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));
        }
    },[categoriaID])

    return(
        data.map(product => <Item key={product.id} data={product}/>)
    )
};

export default ItemListContainer