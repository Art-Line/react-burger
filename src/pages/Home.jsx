import CatalogItem from '../components/CatalogItem';
import Skeleton from '../components/CatalogItem/Skeleton';
import Filters from '../components/Filters';
import Intro from '../components/Intro';
import Paginator from '../components/Paginator';
import Sorting from '../components/Sorting';
// import burgersList from '../burgers.json';
import { useEffect, useState, useContext } from 'react';
import {SearchContext} from '../App'
import ModalAbout from '../components/ModalAbout';

function Home() {

    const [goods, setGoods] = useState([]);             // state for goods
    const [loading, setLoading] = useState(false);      // if goods in loading show Skeleton

    // select category
    const [currentCategory, setCurrentCategory] = useState(0);
    const isCategory = currentCategory ? `category=${currentCategory}` : '';

    // sorting
    const [sortActive, setSortActive] = useState({
        name: 'popularity A-Z',
        field: 'raiting'
    });
    const sortDirection = (sortActive.field.charAt(0) === '-') ? 'desc' : 'asc';
    const sortField = ((sortActive.field.charAt(0) === '-')) ? sortActive.field.substring(1) : sortActive.field;
    const isSorting = sortActive ? `&orderby=${sortField}&order=${sortDirection}` : '';

    // Paginator
    const [currentPage, setCurrentPage] = useState(1);

    // search
    const {searchValue} = useContext(SearchContext);

    // goods
    useEffect(() => {
        setLoading(false);
        fetch(`https://62c09be2d40d6ec55cd39a5f.mockapi.io/burgers?${isCategory}${isSorting}&page=${currentPage}&limit=8`)
            .then(res => res.json())
            .then(json => {
                setGoods(json);
                setLoading(true);                     // when goods loading is done 
            });
    }, [isCategory, isSorting, currentPage]);


    // modal
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
            {!searchValue && <Intro modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />}
            <section className="catalog">
                <h2>
                    {searchValue ? `Search: ${searchValue}` : 'Our Burgers'}
                </h2>
                <div className="catalog__nav">
                    <Filters currentCategory={currentCategory} setCurrentCategory={(id) => setCurrentCategory(id)} />
                    <Sorting
                        sortActive={sortActive}
                        setSortActive={(obj) => setSortActive(obj)}
                    />
                </div>
                <ul className="catalog__list">
                    {loading ?
                        goods
                            .filter((obj) => {
                                if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                                    return true;
                                }
                                return false;
                            })
                            .map(item => <CatalogItem
                                key={item.id}
                                img={item.imageUrl}
                                price={item.price}
                                title={item.title}
                                rating={item.rating} />)
                        :
                        [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    }
                </ul>
                <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </section>
            <ModalAbout setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
        </>
    )
}

export default Home;