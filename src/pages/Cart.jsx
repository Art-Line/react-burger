import { ReactComponent as IcoPlus } from '../img/plus.svg';
import { ReactComponent as IcoMinus } from '../img/minus.svg';
import { ReactComponent as IcoDelete } from '../img/delete.svg';
import { ReactComponent as IcoTrash } from '../img/trash.svg';
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <section className="cart-page">
            <div className="cart-page__head">
                <h1 className="h2-title">Cart</h1>
                <button type="button" className="cart-page__clear-btn">
                    <IcoTrash />
                    Clear cart
                </button>
            </div>
            <ul className="cart-page__list">
                <li className="cart-page__item">
                    <div className="cart-page__item-good">
                        <img width={150} height={100} src="./img/good-01.jpg" alt="" />
                        <p>Cheeseburger with salad</p>
                    </div>
                    <div className="cart-page__item-info">
                        <div className="cart-page__item-count">
                            <button className="cart-page__item-count-btn cart-page__item-count-btn_minus" type="button" aria-label="decrease by one"><IcoMinus /></button>
                            <input className="cart-page__item-count-num" type="text" defaultValue={1} />
                            <button className="cart-page__item-count-btn cart-page__item-count-btn_plus" type="button" aria-label="increase by one"><IcoPlus /></button>
                        </div>
                        <p className="cart-page__item-price">$25</p>
                        <button type="button" className="cart-page__item-delete" aria-label="delete this product">
                            <IcoDelete />
                        </button>
                    </div>
                </li>
                <li className="cart-page__item">
                    <div className="cart-page__item-good">
                        <img width={150} height={100} src="./img/good-02.jpg" alt="" />
                        <p>Cheeseburger with salad more  more  more  more  more  more  more  more  more  more  more  more text</p>
                    </div>
                    <div className="cart-page__item-info">
                    <div className="cart-page__item-count">
                            <button className="cart-page__item-count-btn cart-page__item-count-btn_minus" type="button" aria-label="decrease by one"><IcoMinus /></button>
                            <input className="cart-page__item-count-num" type="text" defaultValue={1} />
                            <button className="cart-page__item-count-btn cart-page__item-count-btn_plus" type="button" aria-label="increase by one"><IcoPlus /></button>
                        </div>
                        <p className="cart-page__item-price">$25</p>
                        <button type="button" className="cart-page__item-delete" aria-label="delete this product">
                            <IcoDelete />
                        </button>
                    </div>
                </li>
            </ul>
            <div className="cart-page__finnaly">
                <p>Number of goods: <b>2</b></p>
                <p>Amount payable: <b className="c-orange">$50</b></p>
            </div>
            <div className="cart-page__footer">
                <Link to="/" className="btn btn_gray btn_left-arrow">To main</Link>
                <button type="button" className="btn btn_orange">Pay</button>
            </div>
        </section>
    )
}

export default Cart;