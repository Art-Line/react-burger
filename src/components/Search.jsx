import { ReactComponent as IcoDelete } from '../img/delete.svg';

function Search({ searchValue, setSearchValue }) {
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