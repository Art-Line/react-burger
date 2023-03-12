import { useState } from "react";

function Sorting() {
    const [sortTooltip, setSortTooltip] = useState(false);
    const sortList = ['popularity A-Z', 'popularity Z-A', 'price A-Z', 'price Z-A', 'alphabet A-Z', 'alphabet Z-A'];
    const [sortActive, setSortActive] = useState(0);

    const selectSort = (index) => {
        setSortActive(index);
        setSortTooltip(false);
    }

    return (
        <div className="sort">
            <button
                type="button"
                className={`sort__btn ${sortTooltip ? 'active' : ''}`}
                onClick={() => setSortTooltip(!sortTooltip)}
            >
                Sort by: {sortList[sortActive]}
            </button>
            {sortTooltip &&
                <ul className="sort__tooltip">
                    {sortList.map((item, index) =>
                        <li key={index}>
                            <button
                                type="button"
                                onClick={() => selectSort(index)}
                                className={`sort__tooltip-btn ${sortActive === index ? 'active' : ''}`}
                            >
                                {item}
                            </button>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default Sorting;