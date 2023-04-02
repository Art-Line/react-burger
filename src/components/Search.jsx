import { useContext } from 'react';
import { ReactComponent as IcoDelete } from '../img/delete.svg';
import {SearchContext} from '../App'

function Search() {

    const {searchValue, setSearchValue} = useContext(SearchContext);

    return (
        <div className="search-box">
            <input
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
                className="default-input search-box__input"
                type="text"
                placeholder="Search"
            />
            {searchValue &&
                <button
                    type="button"
                    onClick={() => setSearchValue('')}
                    className="btn-clear search-box__btn-clear"
                >
                    <IcoDelete />
                </button>
            }
        </div>
    )
}
export default Search;