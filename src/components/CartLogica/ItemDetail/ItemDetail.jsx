import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ data }) {

    const onAdd = (cantidad) => {
        console.log("Compraste " + cantidad)
    }

    return (
        <>
            <Link to={`/detalle/${data.id}`} className="producto">
                <img src={data.image} alt='hola' />
                <h5>{data.title}</h5>
            </Link>
            <div className="producto">
                <img src={data.image} alt={data.title} />
                <h5>{data.title}</h5>
                <ItemCount stock={5} onAdd={onAdd}></ItemCount>
            </div>
        </>
    )
};

export default ItemDetail