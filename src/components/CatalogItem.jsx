function CatalogItem({img, title, price, count}) {
    return (
        <div className="catalog-item">
            <article className="catalog-item__box">
                <img className="img-responsive" src={img}/>
                <h3 className="catalog-item__title">{title}</h3>
                <p className="catalog-item__price">${price}</p>
                <button className="btn btn_block catalog-item__btn" type="button">Add to Cart {count && <span>{count}</span>}</button>
            </article>
        </div>
    )
}

export default CatalogItem;