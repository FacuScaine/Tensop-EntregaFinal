import './Productos.css'
import ItemListContainer from "../CartLogica/ItemListContainer/ItemListContainer"

const Productos = () => {
    return (
        <>
            <h1>Productos</h1>
            <main className='productos'>
                <ItemListContainer></ItemListContainer>

            </main>
        </>
    )
};

export default Productos