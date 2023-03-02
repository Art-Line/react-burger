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
                            <li><a href="!#">Home</a></li>
                            <li><a href="!#">Service</a></li>
                            <li><a href="!#">Top cities</a></li>
                            <li><a href="!#">Contract</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="main">
                    <section className="intro">
                        <div className="intro__info">
                            <h1>super <span>burger</span> delivery service</h1>
                            <p>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
                            <button type="button">btn</button>
                            <a href="!#">link</a>
                        </div>
                        <div className="intro__pic">
                            <img className="img-responsive" src={scooter} width="689" height="682" alt="" />
                        </div>
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