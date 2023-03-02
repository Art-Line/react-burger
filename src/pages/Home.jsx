import logo from '../img/logo.svg';
import scooter from '../img/scooter-guy.png';

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
                    <section className="intro">
                        <div className="intro__info">
                            <h1>super <span>burger</span> delivery service</h1>
                            <p>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
                            <a className="btn" href="!#">About Delivery</a>
                        </div>
                        <div className="intro__pic">
                            <img className="img-responsive" src={scooter} width="689" height="682" alt="" />
                        </div>
                    </section>
                    <section className="catalog">
                        <h2>Our <span>Burgers</span></h2>
                        <div className="catalog__nav">
                            <ul className="filters">
                                <li><button className="filters__btn active" type="button">All burgers</button></li>
                                <li><button className="filters__btn" type="button">Simple burgers</button></li>
                                <li><button className="filters__btn" type="button">Double burgers</button></li>
                                <li><button className="filters__btn" type="button">Veggie burgers</button></li>
                                <li><button className="filters__btn" type="button">Spicy burgers</button></li>
                            </ul>
                            <div className="sort">
                                <button className="sort__btn" type="button">Sort by: popularity A-Z</button>
                                <ul className="sort__tooltip" style={{'display': 'none'}}>
                                    <li><button className="sort__tooltip-btn active" type="button">popularity A-Z</button></li>
                                    <li><button className="sort__tooltip-btn" type="button">popularity Z-A</button></li>
                                    <li><button className="sort__tooltip-btn" type="button">price A-Z</button></li>
                                    <li><button className="sort__tooltip-btn" type="button">price Z-A</button></li>
                                    <li><button className="sort__tooltip-btn" type="button">alphabet A-Z</button></li>
                                    <li><button className="sort__tooltip-btn" type="button">alphabet Z-A</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="catalog__list">
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-01.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad  With Salad  With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart <span>3</span></button>
                                </article>
                            </div>
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-02.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart</button>
                                </article>
                            </div>
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-03.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart</button>
                                </article>
                            </div>
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-04.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart</button>
                                </article>
                            </div>
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-05.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart</button>
                                </article>
                            </div>
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-06.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart</button>
                                </article>
                            </div>
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-07.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart</button>
                                </article>
                            </div>
                            <div className="catalog-item">
                                <article className="catalog-item__box">
                                    <img className="img-responsive" src="./img/good-08.jpg" />
                                    <h3 className="catalog-item__title">Cheeseburger With Salad</h3>
                                    <p className="catalog-item__price">$18.00</p>
                                    <button className="btn btn_block catalog-item__btn" type="button">Add to Cart</button>
                                </article>
                            </div>
                        </div>
                        <ul className="paginator">
                            <li><a className="active" href="!#">1</a></li>
                            <li><a href="!#">2</a></li>
                            <li><a href="!#">3</a></li>
                        </ul>
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