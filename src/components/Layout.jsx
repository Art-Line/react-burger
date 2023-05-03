import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../img/logo.svg';
import { useState } from "react";
import useWindowDimension from "../libraries/resize";
import Search from './Search';
import { ReactComponent as IcoSearch } from '../img/search.svg';

function Layout() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [siteWidth] = useWindowDimension();
    const [searchBox, setSearchBox] = useState(false);
    const desktop = siteWidth >= 768;
    return (
        <>
            <div className="container">
                <header className="header">
                    <div className="header__top">
                        <Link to="/" className="logo">
                            <img className="img-responsive" src={logo} alt="burger" width="166" height="44" />
                        </Link>
                        <button className="btn-search" type="button" onClick={() => setSearchBox(!searchBox)}>
                            <IcoSearch />
                        </button>
                        <Link to="/cart" className="cart" aria-label="open cart page">
                            <span className="cart__count">3</span>
                        </Link>
                        <nav className="main-menu">
                            <button
                                type="button"
                                aria-label="open menu"
                                onClick={() => setMobileMenu(!mobileMenu)}
                                className={`main-menu__btn ${mobileMenu ? 'active' : ''}`}
                            ></button>
                            {(desktop || mobileMenu) &&
                                <ul className="main-menu__list">
                                    <li><NavLink to="/restaurants" onClick={() => setMobileMenu(false)}>Restaurants</NavLink></li>
                                    <li><NavLink to="/service" onClick={() => setMobileMenu(false)}>Reviews</NavLink></li>
                                    <li><NavLink to="/contact" onClick={() => setMobileMenu(false)}>Contact</NavLink></li>
                                </ul>
                            }
                        </nav>
                    </div>
                    {searchBox &&
                        <Search />
                    }
                </header>
                <main className="main">
                    <Outlet />
                </main>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inset">
                        <ul className="footer__menu">
                            <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                            <li><NavLink to="/service">Reviews</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <p className="footer__rights">© 2023 Burger - All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;