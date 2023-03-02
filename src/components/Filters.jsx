function Filters() {
    return (
        <ul className="filters">
            <li><button className="filters__btn active" type="button">All burgers</button></li>
            <li><button className="filters__btn" type="button">Simple burgers</button></li>
            <li><button className="filters__btn" type="button">Double burgers</button></li>
            <li><button className="filters__btn" type="button">Veggie burgers</button></li>
            <li><button className="filters__btn" type="button">Spicy burgers</button></li>
        </ul>
    )
}
export default Filters;