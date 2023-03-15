function Restaurants() {
    return (
        <section className="restaurants">
            <h1 className="h2-title">Top Food <span>restaurant</span></h1>
            <ul className="restaurants__list">
                <li className="restaurants__item">
                    <article className="restaurants__item-box">
                        <div className="restaurants__item-pic">
                            <img className="img-responsive" src="./img/restaurant-01.jpg" alt="" />
                        </div>
                        <div className="restaurants__item-info">
                            <h3 className="restaurants__item-title">Blaze Pizza</h3>
                            <p className="restaurants__item-time">11.00 AM - 10.00 PM</p>
                        </div>
                    </article>
                </li>
                <li className="restaurants__item">
                    <article className="restaurants__item-box">
                        <div className="restaurants__item-pic">
                            <img className="img-responsive" src="./img/restaurant-02.jpg" alt="" />
                        </div>
                        <div className="restaurants__item-info">
                            <h3 className="restaurants__item-title">Pizza Ranch</h3>
                            <p className="restaurants__item-time">09.00 AM - 10.00 PM</p>
                        </div>
                    </article>
                </li>
                <li className="restaurants__item">
                    <article className="restaurants__item-box">
                        <div className="restaurants__item-pic">
                            <img className="img-responsive" src="./img/restaurant-03.jpg" alt="" />
                        </div>
                        <div className="restaurants__item-info">
                            <h3 className="restaurants__item-title">Dion’s Pizza Huta</h3>
                            <p className="restaurants__item-time">10.00 AM - 12.00 PM</p>
                        </div>
                    </article>
                </li>
                <li className="restaurants__item">
                    <article className="restaurants__item-box">
                        <div className="restaurants__item-pic">
                            <img className="img-responsive" src="./img/restaurant-04.jpg" alt="" />
                        </div>
                        <div className="restaurants__item-info">
                            <h3 className="restaurants__item-title">Royel Burger</h3>
                            <p className="restaurants__item-time">11.00 AM - 10.00 PM</p>
                        </div>
                    </article>
                </li>
                <li className="restaurants__item">
                    <article className="restaurants__item-box">
                        <div className="restaurants__item-pic">
                            <img className="img-responsive" src="./img/restaurant-05.jpg" alt="" />
                        </div>
                        <div className="restaurants__item-info">
                            <h3 className="restaurants__item-title">KFC Restaurant</h3>
                            <p className="restaurants__item-time">09.00 AM - 10.00 PM</p>
                        </div>
                    </article>
                </li>
                <li className="restaurants__item">
                    <article className="restaurants__item-box">
                        <div className="restaurants__item-pic">
                            <img className="img-responsive" src="./img/restaurant-06.jpg" alt="" />
                        </div>
                        <div className="restaurants__item-info">
                            <h3 className="restaurants__item-title">Star Food</h3>
                            <p className="restaurants__item-time">10.00 AM - 12.00 PM</p>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    )
}

export default Restaurants;