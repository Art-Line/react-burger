function Sorting() {
    return (
        <div className="sort">
            <button className="sort__btn" type="button">Sort by: popularity A-Z</button>
            <ul className="sort__tooltip" style={{ 'display': 'none' }}>
                <li><button className="sort__tooltip-btn active" type="button">popularity A-Z</button></li>
                <li><button className="sort__tooltip-btn" type="button">popularity Z-A</button></li>
                <li><button className="sort__tooltip-btn" type="button">price A-Z</button></li>
                <li><button className="sort__tooltip-btn" type="button">price Z-A</button></li>
                <li><button className="sort__tooltip-btn" type="button">alphabet A-Z</button></li>
                <li><button className="sort__tooltip-btn" type="button">alphabet Z-A</button></li>
            </ul>
        </div>
    )
}

export default Sorting;