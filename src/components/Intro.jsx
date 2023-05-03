import scooter from '../img/scooter-guy.png';

function Intro(props) {
    return (
        <section className="intro">
            <div className="intro__info">
                <h1>super <span>burger</span> delivery service</h1>
                <p>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
                <button type="button" onClick={() => props.setIsOpen(true)} className="btn btn_orange">About Delivery</button>
            </div>
            <div className="intro__pic">
                <img className="img-responsive" src={scooter} width="689" height="682" alt="" />
            </div>
        </section>
    )
}

export default Intro;