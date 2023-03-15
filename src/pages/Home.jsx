import CatalogItem from '../components/CatalogItem';
import Skeleton from '../components/CatalogItem/Skeleton';
import Filters from '../components/Filters';
import Intro from '../components/Intro';
import Paginator from '../components/Paginator';
import Sorting from '../components/Sorting';
// import burgersList from '../burgers.json';
import { useEffect, useState } from 'react';

function Home() {

    const [goods, setGoods] = useState([]);             // state for goods
    const [isLoading, setIsLoading] = useState(false);  // if goods in loading show Skeleton

    useEffect(() => {
        fetch('https://62c09be2d40d6ec55cd39a5f.mockapi.io/burgers')
            .then(res => res.json())
            .then(json => {
                setGoods(json);
                setIsLoading(true);                     // when goods loading is done 
            });
    }, []);

    return (
        <>
            <Intro />
            <section className="catalog">
                <h2>Our <span>Burgers</span></h2>
                <div className="catalog__nav">
                    <Filters />
                    <Sorting />
                </div>
                <ul className="catalog__list">
                    {isLoading ?
                        goods.map(item => <CatalogItem
                            key={item.id}
                            img={item.imageUrl}
                            price={item.price}
                            title={item.title}
                        />
                        )
                        :
                        [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    }
                </ul>
                <Paginator />
            </section>
        </>
    )
}

export default Home;