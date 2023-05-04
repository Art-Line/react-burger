import { ReactComponent as IcoFb } from '../img/soc-facebook.svg';
import { ReactComponent as IcoTw } from '../img/soc-twitter.svg';
import { ReactComponent as IcoInst } from '../img/soc-instagram.svg';
function Contact() {
    return (
        <>
            <h1 className="h2-title ta-c">Contact</h1>
            <div className="contact-page">
                <div className="contact-page__col">
                    <ul className="contact-page__info">
                        <li className="contact-page__item contact-page__item_address">3800 Chem. Queen Mary, Montréal, QC H3V 1H6</li>
                        <li className="contact-page__item contact-page__item_phone"><a href="tel:+11234567890">+1 123 456 78 90</a></li>
                        <li className="contact-page__item contact-page__item_email"><a href="mailto:support@burger.com">support@burger.com</a></li>
                    </ul>
                    <ul className="social">
                        <li><a href="!#" aria-label="link to facebook"><IcoFb /></a></li>
                        <li><a href="!#" aria-label="link to twitter"><IcoTw /></a></li>
                        <li><a href="!#" aria-label="link to instagram"><IcoInst /></a></li>
                    </ul>
                </div>
                <div className="contact-page__map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24910.214347597528!2d-73.63807464240922!3d45.48444308852156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919fa77b2df69%3A0x4a430fcebf116d43!2z0J7RgNCw0YLQvtGA0LjQuSDQodCy0Y_RgtC-0LPQviDQmNC-0YHQuNGE0LA!5e0!3m2!1sru!2sca!4v1683162324071!5m2!1sru!2sca"
                        width={600}
                        height={450}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </>
    )
}

export default Contact;