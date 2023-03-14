import CatalogItem from '../components/CatalogItem';
import Skeleton from '../components/CatalogItem/Skeleton';
import Filters from '../components/Filters';
import Intro from '../components/Intro';
import Paginator from '../components/Paginator';
import Sorting from '../components/Sorting';
import logo from '../img/logo.svg';
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
            <div className="container">
                <header className="header">
                    <a href="!#" className="logo">
                        <img className="img-responsive" src={logo} alt="burger" width="166" height="44" />
                    </a>
                    <a href="!#" className="cart" aria-label="open cart page">
                        <span className="cart__count">3</span>
                    </a>
                    <nav className="main-menu">
                        <button type="button" className="main-menu__btn" aria-label="open menu"></button>
                        <ul className="main-menu__list">
                            <li><a href="!#">Service</a></li>
                            <li><a href="!#">Restaurants</a></li>
                            <li><a href="!#">Contract</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="main">
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
                </main>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inset">
                        <ul className="footer__menu">
                            <li><a href="!#">Privacy</a></li>
                            <li><a href="!#">Security</a></li>
                            <li><a href="!#">Terms</a></li>
                        </ul>
                        <p className="footer__rights">© 2023 Burger - All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home;