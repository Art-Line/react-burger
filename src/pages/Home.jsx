import CatalogItem from '../components/CatalogItem';
import Filters from '../components/Filters';
import Intro from '../components/Intro';
import Paginator from '../components/Paginator';
import Sorting from '../components/Sorting';
import logo from '../img/logo.svg';

function Home() {
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
                        <div className="catalog__list">
                            <CatalogItem
                                img={"./img/good-01.jpg"}
                                price={18.00}
                                title="Cheeseburger With Salad"
                                count={3}
                            />
                            <CatalogItem
                                img={"./img/good-02.jpg"}
                                price={19.00}
                                title="Cheeseburger With Salad"
                            />
                            <CatalogItem
                                img={"./img/good-03.jpg"}
                                price={55.00}
                                title="Cheeseburger With Salad"
                            />
                            <CatalogItem
                                img={"./img/good-04.jpg"}
                                price={55.00}
                                title="Cheeseburger With Salad"
                            />
                            <CatalogItem
                                img={"./img/good-05.jpg"}
                                price={55.00}
                                title="Cheeseburger With Salad"
                            />
                            <CatalogItem
                                img={"./img/good-06.jpg"}
                                price={55.00}
                                title="Cheeseburger With Salad"
                            />
                            <CatalogItem
                                img={"./img/good-07.jpg"}
                                price={55.00}
                                title="Cheeseburger With Salad"
                            />
                            <CatalogItem
                                img={"./img/good-08.jpg"}
                                price={55.00}
                                title="Cheeseburger With Salad"
                            />
                        </div>
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