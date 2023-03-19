import { useState } from "react";

function Sorting({sortActive, setSortActive}) {
    const [sortTooltip, setSortTooltip] = useState(false);
    const sortList = [
        {
            name: 'popularity A-Z',
            field: 'raiting'
        }, 
        {
            name: 'popularity Z-A',
            field: '-raiting'
        }, 
        {
            name: 'price A-Z',
            field: 'price'
        }, 
        {
            name: 'price Z-A',
            field: '-price'
        }, 
        {
            name: 'alphabet A-Z',
            field: 'title'
        },
        {
            name: 'alphabet Z-A',
            field: '-title'
        }];
    

    const selectSort = (obj) => {
        setSortActive(obj);
        setSortTooltip(false);
    }

    return (
        <div className="sort">
            <button
                type="button"
                className={`sort__btn ${sortTooltip ? 'active' : ''}`}
                onClick={() => setSortTooltip(!sortTooltip)}
            >
                Sort by: {sortActive.name}
            </button>
            {sortTooltip &&
                <ul className="sort__tooltip">
                    {sortList.map((obj) =>
                        <li key={obj.index}>
                            <button
                                type="button"
                                onClick={() => selectSort(obj)}
                                className={`sort__tooltip-btn ${sortActive.field === obj.field ? 'active' : ''}`}
                            >
                                {obj.name}
                            </button>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default Sorting;