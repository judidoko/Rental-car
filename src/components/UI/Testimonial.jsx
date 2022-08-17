import React from "react";
import Slider from "react-slick";
import avaImg1 from "../../assets/all-images/ava-1.jpg";
import avaImg2 from "../../assets/all-images/ava-2.jpg";
import avaImg3 from "../../assets/all-images/ava-3.jpg";
import avaImg4 from "../../assets/all-images/ava-4.jpg";
import "../../styles/Testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial">
        <p className="section_description">
          Lorem ipsum dolor sit amet. Eos omnis culpa et incidunt soluta non
          voluptas voluptas quo quia cupiditate ut harum.
        </p>

        <div className="mt-2 d-flex align-items-center gap-4">
          <img src={avaImg1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-2">John Doe</h6>
            <p className="section_description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section_description">
          Lorem ipsum dolor sit amet. Eos omnis culpa et incidunt soluta non
          voluptas voluptas quo quia cupiditate ut harum.
        </p>

        <div className="mt-2 d-flex align-items-center gap-4">
          <img src={avaImg2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-2">John Doe</h6>
            <p className="section_description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section_description">
          Lorem ipsum dolor sit amet. Eos omnis culpa et incidunt soluta non
          voluptas voluptas quo quia cupiditate ut harum.
        </p>

        <div className="mt-2 d-flex align-items-center gap-4">
          <img src={avaImg3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-2">John Doe</h6>
            <p className="section_description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section_description">
          Lorem ipsum dolor sit amet. Eos omnis culpa et incidunt soluta non
          voluptas voluptas quo quia cupiditate ut harum.
        </p>

        <div className="mt-2 d-flex align-items-center gap-4">
          <img src={avaImg4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-2">John Doe</h6>
            <p className="section_description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
