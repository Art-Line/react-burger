function Filters({currentCategory, setCurrentCategory}) {
    const categories = ['All burgers', 'Simple burgers', 'Double burgers', 'Veggie burger', 'Spicy burgers'];
    
    return (
        <ul className="filters">
            {categories.map((elem, index) => {
                return (
                    <li key={index}>
                        <button
                            onClick={() => setCurrentCategory(index)}
                            className={`filters__btn ${currentCategory === index ? 'active' : ''}`}
                            type="button"
                        >
                            {elem}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Filters;