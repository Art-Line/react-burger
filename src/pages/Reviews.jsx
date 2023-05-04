import Slider from "react-slick";
import { ReactComponent as IcoArrowSlider } from '../img/arrow-slider.svg';

function SliderArrow(props) {
    const { customClass, onClick } = props;
    return (
        <button
            type="button"
            className={customClass}
            onClick={onClick}
        >
            <IcoArrowSlider />
        </button>
    );
}

function Reviews() {
    const settings = {
        arrows: true,
        prevArrow: <SliderArrow customClass="slider-arrow slider-arrow_prev" />,
        nextArrow: <SliderArrow customClass="slider-arrow slider-arrow_next" />,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        dotsClass: 'slider-dots',
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <>
            <h1 className="h2-title ta-c">What Our Client Are <span>Saying</span></h1>
            <Slider className="reviews" {...settings}>
                <div className="reviews__item">
                    <p className="reviews__item-text">Burgers has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery;</p>
                    <p className="reviews__item-user">Anglina Jole</p>
                    <p className="reviews__item-who">Food lover</p>
                </div>
                <div className="reviews__item">
                    <p className="reviews__item-text">Burgers has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery;</p>
                    <p className="reviews__item-user">Anglina Jole</p>
                    <p className="reviews__item-who">Food lover</p>
                </div>
                <div className="reviews__item">
                    <p className="reviews__item-text">Burgers has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery;</p>
                    <p className="reviews__item-user">Anglina Jole</p>
                    <p className="reviews__item-who">Food lover</p>
                </div>
            </Slider>
        </>
    )
}

export default Reviews;