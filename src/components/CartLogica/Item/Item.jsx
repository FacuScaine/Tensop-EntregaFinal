import './Item.css';
import { Link } from "react-router-dom";


export const Item = ({ data }) => {

    return (
        <>
            <Link to={`/detalle/${data.id}`} className="producto">
                <img src={data.image} alt='hola' />
                <h5>{data.title}</h5>
            </Link>
        </>
    )
};

export default Item