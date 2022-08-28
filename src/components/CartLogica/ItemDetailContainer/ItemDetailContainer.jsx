import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

    const [data, setData] = useState([]);
    const { categoriaID } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');

        const queryFilter = query(queryCollection, where('categoria', '==', categoriaID));
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))));
    }, [categoriaID])

    return (
        <ItemDetail></ItemDetail>
    )
};

export default ItemDetailContainer