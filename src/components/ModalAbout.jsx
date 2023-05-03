import Modal from 'react-modal';
function ModalAbout(props) {



    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={() => props.setIsOpen(false)}
                className="modal"
                overlayClassName="overlay"
                ariaHideApp={false}
            >
                <button
                    type="button"
                    className="modal__close"
                    aria-label="close modal"
                    onClick={() => props.setIsOpen(false)}
                ></button>
                <h2 className="modal__h2">Stay at home, we will Provide good food</h2>
                <p className="modal__text">We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>
                <ul className="advantages">
                    <li className="advantages__item advantages__item_01">fasted delivery in 30 Minutes</li>
                    <li className="advantages__item advantages__item_02">300+ delivery men</li>
                    <li className="advantages__item advantages__item_03">500+ restaurant & cafe shop</li>
                </ul>
            </Modal>
        </div>
    );
}

export default ModalAbout;