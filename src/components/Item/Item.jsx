function Item ({data}) {
    return(
        <>
            <h3>{data.title}</h3>
            <img src={data.image} alt={data.title} />
        </>
        )
};

export default Item